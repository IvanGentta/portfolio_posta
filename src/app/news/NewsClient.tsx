"use client";

import { useTranslate } from "@/context/LanguageContext";
import NewsCard from "./NewsCard";

export default function NewsClient({ data }: { data: any[] }) {
  const { t } = useTranslate();

  return (
    <section className="w-full mb-12">
      <h1 className="font-titulo text-2xl mb-6 md:pl-6 underline text-contrast_cyan font-bold">
        {t("navNews")}
      </h1>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center ">
        {data.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </ul>
    </section>
  );
}
