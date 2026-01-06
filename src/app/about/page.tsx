"use client";
import Carrousel from "@/components/Carrousel";
import { useTranslate } from "@/context/LanguageContext";
import Image from "next/image";

export default function About() {
  const { t } = useTranslate();

  return (
    <section className="w-full max-w-6xl mx-auto px-6">
      <h1 className="font-titulo text-2xl mb-6 underline text-contrast_cyan font-bold">
        {t("navAbout")}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/fotoCarnet1(730px).jpeg"
            alt="Foto de Iván Gentta"
            width={440}
            height={440}
            className="rounded-4xl w-full max-w-xs sm:max-w-sm h-auto shadow-[1px_1px_20px_rgba(140,3,153,0.85)] p-1 border-primary border"
            priority
          />
        </div>

        <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-prose">
          {t("aboutDesc")}
        </p>
      </div>
      <div className="pt-12">
        <h1 className="font-titulo text-2xl underline text-contrast_cyan font-bold">
          {t("skills")}
        </h1>
        <Carrousel />
      </div>
    </section>
  );
}
