export const isArabic = computed(() => {
  const { locale } = useI18n();

  return locale.value === "ar" ? true : false;
});
