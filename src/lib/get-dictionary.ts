import pt from "@/messages/pt.json";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import type { Locale } from "@/interfaces";

export type Dictionary = typeof pt;

const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];