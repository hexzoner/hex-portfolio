import { createContext, useState } from "react";
import { ReactNode } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: "EN",
  setLanguage: () => {},
});

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("EN");
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
