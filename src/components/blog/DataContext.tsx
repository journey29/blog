import React, { createContext, useContext, useState, useEffect } from "react";
import { Story } from "@prisma/client";
import { api } from "@/trpc/react";

interface DataContextType {
  filteredData: Story[];
  setFilteredData: React.Dispatch<React.SetStateAction<Story[]>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = api.blog.stories.useQuery();
  const [filteredData, setFilteredData] = useState<Story[]>([]);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  if (!filteredData) return null;

  return (
    <DataContext.Provider value={{ filteredData, setFilteredData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
