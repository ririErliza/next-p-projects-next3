"use client";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [showNavModal, setShowNavModal] = useState(false);
  return <GlobalContext.Provider calue={{}}>{children}</GlobalContext.Provider>;
}
