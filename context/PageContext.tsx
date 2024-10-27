"use client";

import React, { createContext, useState, ReactNode } from "react";

interface PageContextType {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  handlePageNavigation: (currentPage: string) => void;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobileNav: () => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

interface PageContextProviderProps {
  children: ReactNode;
}

const PageContextProvider: React.FC<PageContextProviderProps> = ({
  children,
}) => {
  const [activePage, setActivePage] = useState<string>("Home");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const handlePageNavigation = (currentPage: string) => {
    setActivePage(currentPage);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prevStatus) => !prevStatus);
  };

  const value: PageContextType = {
    activePage,
    setActivePage,
    handlePageNavigation,
    isMobileNavOpen,
    setIsMobileNavOpen,
    toggleMobileNav,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageContextProvider;
export { PageContext };
