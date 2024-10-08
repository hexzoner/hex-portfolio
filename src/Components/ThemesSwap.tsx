import React, { useEffect } from "react";

export default function ThemesSwap() {
  const storageKey = "snap-task-theme";
  const themesSwap = ["dim", "light"];
  const [theme, setTheme] = React.useState(() => {
    const storedTheme = localStorage.getItem(storageKey);
    return storedTheme ? JSON.parse(storedTheme) : themesSwap[0];
  });

  useEffect(() => {
    loadThemeFromStorage();
  }, []);

  window.onload = () => {
    loadThemeFromStorage();
  };

  function loadThemeFromStorage() {
    const storedTheme = localStorage.getItem(storageKey);
    applyTheme(storedTheme ? JSON.parse(storedTheme) : themesSwap[0]);
  }

  function applyTheme(theme: string) {
    const htmlElement = document.querySelector("html");
    if (htmlElement) htmlElement.setAttribute("data-theme", theme);

    localStorage.setItem(storageKey, JSON.stringify(theme));
    setTheme(theme);
  }

  function handleSwap(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.checked = !e.target.checked;
    e.target.checked ? applyTheme(themesSwap[1]) : applyTheme(themesSwap[0]);
  }

  return (
    <label className="flex gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      <input
        type="checkbox"
        onChange={handleSwap}
        checked={theme === themesSwap[0] ? true : false}
        className="toggle theme-controller"
        title="Toggle theme"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
}

//  <input onChange={handleSwap} type="checkbox" checked={theme === themesSwap[0] ? true : false} />
