import { createContext, useContext, useState } from 'react';

interface ISearchContext {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

interface SearchProviderProps {
  children: React.ReactNode
}

const SearchContext = createContext<ISearchContext>({} as ISearchContext);

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{searchQuery, setSearchQuery}}>
      {children}
    </SearchContext.Provider>
  );
};