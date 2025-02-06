import { createI18n } from "vue-i18n";
import { watch } from "vue";

const messages = {
  en: {},
  ar: {},
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

const setDirection = (locale) => {
  const dir = locale === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
};

watch(
  () => i18n.global.locale,
  (newLocale) => {
    setDirection(newLocale);
  }
);

setDirection(i18n.global.locale.value);

export default i18n;
