const key: string = "hex-portfolio";

export function storeLanguage(language: string) {
  localStorage.setItem(key, language);
}

export function restoreLanguage() {
  return localStorage.getItem(key);
}
