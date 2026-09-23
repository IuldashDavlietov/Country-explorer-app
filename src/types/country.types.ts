export const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'] as const;
export type Region = (typeof REGIONS)[number];
export interface Country {
    names: {
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
export interface ApiResponse {
    data: {
        objects: Country[];
    };
}
export interface CountryContextType {
    countries: Country[];
    loading: boolean;
    error: string | null;
    search: string;
    setSearch: (search: string) => void;
    regions: string;
    setRegions: (region: string) => void;
    favorites: Country[];
    addToFavorites: (country: Country) => void;
    removeFromFavorites: (code: string) => void;
    hasMore: boolean;
    loadMore: () => void;
    totalCount: number;
}

export type Theme = 'light' | 'dark'
export interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

