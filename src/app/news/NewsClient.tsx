"use client";

import { useTranslate } from "@/context/LanguageContext";
import NewsCard from "./NewsCard";

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

type Props = {
  data: News[];
};

export default function NewsClient({ data }: Props) {
  const { t } = useTranslate();

  return (
    <section className="w-full mb-12">
      <h1 className="font-titulo text-2xl mb-6 md:pl-6 underline text-contrast_cyan font-bold">
        {t("navNews")}
      </h1>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        {data.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </ul>
    </section>
  );
}
