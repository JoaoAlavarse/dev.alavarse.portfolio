import pt from "@/messages/pt.json";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

export const dictionaries = { pt, en, es };

export const getDictionary = (locale: "pt" | "en" | "es") =>
  dictionaries[locale];