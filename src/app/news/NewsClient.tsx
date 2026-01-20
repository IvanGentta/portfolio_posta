"use client";

import { useTranslate } from "@/context/LanguageContext";
import NewsCard from "./NewsCard";
import { useState } from "react";

type Tag = {
  id: number;
  name: string;
  slug: string;
};

type NewsTag = {
  tags: Tag[];
};

type NewsImage = {
  id: number;
  image_url: string;
  position: number;
};

type News = {
  id: number;
  title: string;
  content: string;
  external_url?: string | null;
  published_at: string;
  news_tags?: NewsTag[] | null;
  news_images?: NewsImage[] | null;
};

export default function NewsClient({ data }: { data: News[] }) {
  const { t } = useTranslate();
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const allTags: Tag[] = Array.from(
    new Map(
      data
        .flatMap((news) => news.news_tags?.flatMap((nt) => nt.tags) ?? [])
        .map((tag) => [tag.id, tag])
    ).values()
  );

  const filteredNews =
    selectedTag === "all"
      ? data
      : data.filter((news) =>
          news.news_tags?.some((nt) => {
            const tagsArray = Array.isArray(nt.tags) ? nt.tags : [nt.tags];

            return tagsArray.some((tag) => String(tag.id) === selectedTag);
          })
        );

  return (
    <section className="w-full mb-12">
      <h1 className="font-titulo text-2xl mb-6 md:pl-6 underline text-contrast_cyan font-bold">
        {t("navNews")}
      </h1>

      <div className="mb-6 flex md:pl-6 items-center">
        <h3 className="pr-2 text-2xl underline">{t("toFilter")}</h3>
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="w-56 rounded-lg border border-primary/40 bg-black/40 backdrop-blur
          py-2 px-2 text-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="all">{t("allCategories")}</option>

          {allTags.map((tag) => (
            <option key={tag.id} value={String(tag.id)}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        {filteredNews.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </ul>
    </section>
  );
}
