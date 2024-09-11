import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageProvider.tsx";
import { storeLanguage } from "../utils/storage.ts";

export default function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    storeLanguage(selectedLanguage);
  };

  return (
    <select value={language} onChange={handleChange} className="select  w-full max-w-[6rem]" aria-label="Language Selector">
      <option>EN</option>
      <option>DE</option>
    </select>
  );
}
