import { createContext, useContext, useEffect, useState } from "react";

const initial = window.matchMedia("(prefers-color-scheme: dark)").matches;
const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const storedTheme = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return storedTheme ? JSON.parse(storedTheme) : initial;
  });

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));

    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvier");

  return context;
}
