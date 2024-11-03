"use client";

import React, { createContext, ReactNode, useState } from "react";

interface ViewModeContextType {
  activeViewMode: string;
  setActiveViewMode: React.Dispatch<React.SetStateAction<string>>;
}

interface ViewModeContextProviderProps {
  children: ReactNode;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(
  undefined,
);
const ViewModeContextProvider: React.FC<ViewModeContextProviderProps> = ({
  children,
}) => {
  const [activeViewMode, setActiveViewMode] = useState<string>("list");

  const value = {
    activeViewMode,
    setActiveViewMode,
  };
  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
};

export default ViewModeContextProvider;

export { ViewModeContext, ViewModeContextProvider };
