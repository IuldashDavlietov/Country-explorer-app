export interface Country {
    name: {
        common: string;
        official: string
    };
    capital?: string[];
    region: string;
    population: number;
    flags: {
        png: string;
        svg: string;
    };
    cca3: string
}

export interface CountryContextType {
 
  countries: Country[]; 
  loading: boolean;
  error: string | null;

  search: string;
  setSearch: (search: string) => void;
  region: string;
  setRegion: (region: string) => void;

 
  favorites: Country[];
  addToFavorites: (country: Country) => void;
  removeFromFavorites: (code: string) => void;

 
  hasMore: boolean;       
  loadMore: () => void;   
  totalCount: number;      
}