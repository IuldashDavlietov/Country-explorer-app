import { useState, type ReactNode } from "react";
import { CountryContext } from "./CountryContext";
import type { Country, CountryContextType } from "../types/country.types";

export const CountryProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Country[]>([])

    const addToFavorites = (country: Country) => {
        setFavorites((prev) => {
            const isAlreadyFavorite = prev.some((item) => item.cca3 === country.cca3);
            if (isAlreadyFavorite) return prev;
            return [...prev, country];
        });
    };

    const removeFromFavorites = (code: string) => {
        setFavorites((prev) => prev.filter((country) => country.cca3 !== code));
    };

    const value: CountryContextType = { favorites, addToFavorites, removeFromFavorites }
    return (
        <CountryContext.Provider value={value}>
            {children}
        </CountryContext.Provider>
    )
}