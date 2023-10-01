// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface SearchContextType {
//   searchQuery: string;
//   setSearch: (query: string) => void;
// }

// const SearchContext = createContext<SearchContextType | undefined>(undefined);

// export function useSearch() {
//   const context = useContext(SearchContext);
//   if (context === undefined) {
//     throw new Error("useSearch must be used within a SearchProvider");
//   }
//   return context;
// }

// interface SearchProviderProps {
//   children: ReactNode;
// }

// export function SearchProvider({ children }: SearchProviderProps) {
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   const setSearch = (query: string) => {
//     setSearchQuery(query);
//   };

//   return (
//     <SearchContext.Provider value={{ searchQuery, setSearch }}>
//       {children}
//     </SearchContext.Provider>
//   );
// }

// SearchProvider.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { fetchUnsplashPhotos } from "@/services/api";
import { useQuery } from "react-query";

// import { useUnsplashPhotos } from "./api"; // Import your data fetching function

interface SearchContextType {
  searchQuery: string;
  setSearch: (query: string) => void;
  photos: any | null; // Adjust the type based on your response structure
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  error: unknown;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [photos, setPhotos] = useState([]);
  const { data, isLoading, isFetching, isError, error, refetch } = useQuery(
    ["unsplashPhotos", searchQuery],
    () => fetchUnsplashPhotos(searchQuery)
  ); // Example usage of React Query for fetching data

  const setSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (data?.results) {
      const adjustedResults = data.results; // Assuming the structure is the same
      setPhotos(adjustedResults);
    } else {
      setPhotos(data);
    }
  }, [data]);
  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearch,
        photos,
        isLoading,
        isFetching,
        isError,
        error,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
