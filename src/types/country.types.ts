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
    favorites: Country[];
    addToFavorites: (country: Country)=> void;
    removeFromFavorites: (code: string)=> void;
}