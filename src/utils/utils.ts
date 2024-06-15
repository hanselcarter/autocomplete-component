export const searchCountryApi = "https://restcountries.com/v3.1";

export const generateId = (prefix: string) => {
  return prefix + Math.random().toString(16).slice(2);
};
