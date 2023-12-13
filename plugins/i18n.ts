import { createI18n } from "vue-i18n";
import en from "~/i18/en";
import ar from "~/i18/ar";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    messages: {
      en,
      ar,
    },
  });

  vueApp.use(i18n);
});
