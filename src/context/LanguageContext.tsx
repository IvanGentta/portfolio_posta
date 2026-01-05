import type { ReactNode } from "react";
import { createContext, useState, useContext } from "react";
import esJson from "../translations/es.json";
import enJson from "../translations/en.json";

type Lang = "es" | "en";
type TranslationDict = Record<string, string>;

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const translations: Record<Lang, TranslationDict> = {
  es: esJson as TranslationDict,
  en: enJson as TranslationDict,
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  function t(key: string) {
    return translations[lang][key] ?? key;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useTranslate = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslate must be used inside <LanguageProvider>");
  }
  return ctx;
};
