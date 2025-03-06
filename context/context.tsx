"use client";
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext<{
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  toggleTheme: () => void;
}>({
  menuOpen: false,
  setMenuOpen: () => {},
  isDarkMode: false,
  toggleTheme: () => {},
});

import { ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {

  // Menu Open State
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // DARK MODE State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMenuState = localStorage.getItem("menuOpen");
      const savedMode = localStorage.getItem("darkMode");

      if (savedMenuState !== null) setMenuOpen(JSON.parse(savedMenuState));
      if (savedMode !== null) setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("menuOpen", JSON.stringify(menuOpen));
    }
  }, [menuOpen]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <AppContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        isDarkMode,
        toggleTheme,
      }}
    >
        <div className={isDarkMode ? 'container-app-context dark-mode bg-dark text-light' : 'container-app-context bg-light text-dark'}>
            {children}
        </div>
    </AppContext.Provider>
  );
};
