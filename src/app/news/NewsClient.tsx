"use client";

import { useTranslate } from "@/context/LanguageContext";
import NewsCard from "./NewsCard";
import { useState, useEffect, useRef } from "react";

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

  // Paginación
  const ITEMS_PER_PAGE = 2;
  const [currentPage, setCurrentPage] = useState<number>(1);

  // ref para scroll durante paginacion en mobile
  const newsSectionRef = useRef<HTMLElement>(null);

  const allTags: Tag[] = Array.from(
    new Map(
      data
        .flatMap((news) => news.news_tags?.flatMap((nt) => nt.tags) ?? [])
        .map((tag) => [tag.id, tag]),
    ).values(),
  );

  const filteredNews =
    selectedTag === "all"
      ? data
      : data.filter((news) =>
          news.news_tags?.some((nt) => {
            const tagsArray = Array.isArray(nt.tags) ? nt.tags : [nt.tags];
            return tagsArray.some((tag) => String(tag.id) === selectedTag);
          }),
        );

  // Cálculos paginación
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // array dinamica para renderizar los botones
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  useEffect(() => {
    // Chequeo si es mobile
    const isMobile = window.innerWidth < 1024;
    if (isMobile && newsSectionRef.current) {
      newsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage]);

  return (
    <section
      ref={newsSectionRef}
      id="news"
      className="w-full mb-12 scroll-mt-24"
    >
      <h1 className="font-titulo text-2xl mb-6 md:pl-6 underline text-contrast_cyan font-bold">
        {t("navNews")}
      </h1>

      <div className="mb-6 flex md:pl-6 items-center">
        <h3 className="pr-2 text-2xl underline">{t("toFilter")}</h3>
        <select
          value={selectedTag}
          onChange={(e) => {
            setSelectedTag(e.target.value);
            setCurrentPage(1); // reiniciamos a página 1 al cambiar de filtro
          }}
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
        {paginatedNews.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </ul>

      {/* botones solo se muestran si hay más de una página) */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center gap-2">
          {/* Botón Anterior */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-lg border border-primary/20 bg-black/40 text-sm
            disabled:opacity-30 disabled:pointer-events-none hover:bg-primary/20 transition"
          >
            &larr;
          </button>

          {/* páginas */}
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg text-sm font-bold transition ${
                currentPage === page
                  ? "bg-contrast_cyan text-black"
                  : "border border-primary/20 bg-black/40 hover:bg-primary/20 text-white"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Botón Siguiente */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-lg border border-primary/20 bg-black/40 text-sm
            disabled:opacity-30 disabled:pointer-events-none hover:bg-primary/20 transition"
          >
            &rarr;
          </button>
        </div>
      )}
    </section>
  );
}
