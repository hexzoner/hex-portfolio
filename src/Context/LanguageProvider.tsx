import { createContext, useState } from "react";
import { ReactNode } from "react";
import { restoreLanguage } from "../utils/storage";

interface LanguageContextProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: "DE",
  setLanguage: () => {},
});

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(restoreLanguage() || "DE");
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
