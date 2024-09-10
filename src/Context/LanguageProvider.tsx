import { createContext, useState } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: "EN",
  setLanguage: () => {},
});

import { ReactNode } from "react";

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("EN");
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
