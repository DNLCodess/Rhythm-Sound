"use client";
import { createContext, useContext, useEffect } from "react";

const LayoutContext = createContext(undefined);

function useLayoutContext() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
}

function LayoutProvider({ children }) {
  // Force light mode permanently
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("dark");
  }, []);

  const contextValue = {
    settings: { theme: "light" },
    themeMode: "light",
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
}

export { useLayoutContext, LayoutProvider };
