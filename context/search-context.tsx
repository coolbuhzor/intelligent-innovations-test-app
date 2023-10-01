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

const DataContext = createContext<SearchContextType | undefined>(undefined);

export function useData() {
  const context = useContext(DataContext);
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
  const { data, isLoading, isFetching, isError, error } = useQuery(
    ["unsplashPhotos", searchQuery],
    () => fetchUnsplashPhotos(searchQuery)
  );

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
    <DataContext.Provider
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
    </DataContext.Provider>
  );
}
