"use client";

import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslate } from "@/context/LanguageContext";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useTranslate();

  const toggleLang = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  return (
    <nav className="w-full relative">
      <div
        className={`w-full py-2 px-8 border border-gray-500 rounded-xl bg-gray-600/50 backdrop-blur
           transition-opacity duration-300 flex items-center justify-between md:opacity-100 ${
             open ? "opacity-0 pointer-events-none" : "opacity-100"
           }`}
      >
        <Link href="#inicio">
          <Image
            src="/images/logoBlackPng.PNG"
            alt="logo"
            width="40"
            height="40"
          />
        </Link>

        {/* Mobile */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <FiMenu className="w-6 h-6" />
        </button>

        {/* No mobile */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleLang}
            className="
            border border-cyan-400/40 rounded-2xl px-3 py-1 text-sm
            flex items-center gap-1
          bg-cyan-400/5 backdrop-blur
            transition-all duration-200
          hover:border-cyan-300 cursor-pointer"
            aria-label="Change language"
          >
            <span
              className={`transition-all duration-200 ${
                lang === "es"
                  ? "text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]"
                  : "text-gray-400"
              }`}
            >
              ES
            </span>

            <span className="text-gray-500">/</span>

            <span
              className={`transition-all duration-200 ${
                lang === "en"
                  ? "text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]"
                  : "text-gray-400"
              }`}
            >
              EN
            </span>
          </button>

          <ul className="flex space-x-6">
            <Link href="#about">
              <li>{t("navAbout")}</li>
            </Link>
            <Link href="#projects">
              <li>{t("navProjects")}</li>
            </Link>
            <Link href="#contact">
              <li>{t("navContact")}</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`border-2 absolute inset-0 w-auto h-72 flex flex-col justify-between items-end
         border-gray-500 rounded-xl bg-gray-600/50 backdrop-blur p-4 transition-all duration-300 ease-in-out origin-top
            ${
              open
                ? "opacity-100 scale-y-100 translate-y-0"
                : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
            }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="mb-2"
          aria-label="Close menu"
        >
          <FiX className="w-8 h-8" />
        </button>
        <div className="w-full h-0.5 border" />
        <ul className="flex flex-col space-y-6 text-lg text-right mr-1">
          <Link href="#about">
            <li onClick={() => setOpen(false)}>{t("navAbout")}</li>
          </Link>
          <Link href="#projects">
            <li onClick={() => setOpen(false)}>{t("navProjects")}</li>
          </Link>
          <Link href="#contact">
            <li onClick={() => setOpen(false)}>{t("navContact")}</li>
          </Link>
        </ul>
        <button
          onClick={toggleLang}
          className="
            border border-cyan-400/40 rounded-2xl px-3 py-1 text-sm
            flex items-center gap-1
          bg-cyan-400/5 backdrop-blur
            transition-all duration-200
          hover:border-cyan-300 cursor-pointer"
          aria-label="Change language"
        >
          <span
            className={`transition-all duration-200 ${
              lang === "es"
                ? "text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]"
                : "text-gray-400"
            }`}
          >
            ES
          </span>

          <span className="text-gray-500">/</span>

          <span
            className={`transition-all duration-200 ${
              lang === "en"
                ? "text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]"
                : "text-gray-400"
            }`}
          >
            EN
          </span>
        </button>
      </div>
    </nav>
  );
}
