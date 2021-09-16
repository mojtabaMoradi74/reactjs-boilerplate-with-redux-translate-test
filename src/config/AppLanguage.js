export const AppLanguagesArray = [
  { title: 'english', code: 'en' },
  { title: 'فارسی', code: 'fa', direction: 'rtl' },
]

export let AppLanguages = {}

AppLanguagesArray.map((lang) => {
  AppLanguages[lang.code] = lang;
});
