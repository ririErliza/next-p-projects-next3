"use client";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [showNavModal, setShowNavModal] = useState(false);
  const [pageLevelLoader, setPageLevelLoader] = useState(true);
  const [componentLevelLoader, setComponentLevelLoader] = useState({
    loading: false,
    id: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        showNavModal,
        setShowNavModal,
        pageLevelLoader,
        setPageLevelLoader,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
