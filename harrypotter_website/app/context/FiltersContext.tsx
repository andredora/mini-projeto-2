"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type FilterContextType = {
  search: string;
  house: string;
  setSearch: (value: string) => void;
  setHouse: (value: string) => void;
};

const FiltersContext = createContext<FilterContextType | undefined>(undefined);

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [house, setHouse] = useState("");

  return (
    <FiltersContext.Provider value={{ search, house, setSearch, setHouse }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilters deve ser usado dentro de FiltersProvider");
  }
  return context;
};
