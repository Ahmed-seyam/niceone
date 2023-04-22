import { isClient } from "@vueuse/core";
import type { Locale } from "vue-i18n";
import { createI18n } from "vue-i18n";
import { type UserModule } from "~/types";

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const i18n = createI18n({
  legacy: false,
  locale: "",
  messages: {},
});

const localesMap = Object.fromEntries(
  Object.entries(import.meta.glob("../../locales/*.yml")).map(
    ([path, loadLocale]) => [path.match(/([\w-]*)\.yml$/)?.[1], loadLocale]
  )
) as Record<Locale, () => Promise<{ default: Record<string, string> }>>;

export const availableLocales = Object.keys(localesMap);

const loadedLanguages: string[] = [];

function setI18nLanguage(lang: Locale) {
  if (isClient) localStorage.setItem("lang", lang);
  i18n.global.locale.value = lang as any;
  if (isClient) document.querySelector("html")?.setAttribute("lang", lang);
  return lang;
}

export async function loadLanguageAsync(lang: string): Promise<Locale> {
  // If the same language
  if (i18n.global.locale.value === lang) return setI18nLanguage(lang);

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) return setI18nLanguage(lang);

  // If the language hasn't been loaded yet
  const messages = await localesMap[lang]();
  i18n.global.setLocaleMessage(lang, messages.default);
  loadedLanguages.push(lang);
  return setI18nLanguage(lang);
}

export const install: UserModule = ({ app }) => {
  app.use(i18n);

  let lang: any = "en";
  if (isClient) {
    lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";

    if (lang === "ar") {
      document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
    } else {
      document.getElementsByTagName("body")[0].setAttribute("dir", "ltr");
    }
  }

  loadLanguageAsync(lang);
};
