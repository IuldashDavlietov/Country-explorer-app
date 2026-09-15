import { useState, useMemo, type ReactNode } from "react";
import type { Country, CountryContextType } from "../types/country.types";
import { useFetch } from "../hooks/useFetch";
import { CountryContext } from "./CountryContext";

const ITEMS_PER_PAGE = 9;

export const CountryProvider = ({ children }: { children: ReactNode }) => {
    const { data, loading, error } = useFetch<Country[]>('/countries/v5');
    const [favorites, setFavorites] = useState<Country[]>([]);
    const [search, setSearch] = useState<string>('');
    const [region, setRegion] = useState<string>('All');
    const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

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

    const byRegion = data
        ? data.filter((country) => region === 'All' || country.region === region)
        : [];

    const filteredCountries = byRegion.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination logic

    const loadMore = () => {
        setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
    };
    const handleSetSearch = (newSearch: string) => {
        setSearch(newSearch);
        setVisibleCount(ITEMS_PER_PAGE);
    };
    const handleSetRegion = (newRegion: string) => {
        setRegion(newRegion);
        setVisibleCount(ITEMS_PER_PAGE);
    };
    const displayedCountries = filteredCountries.slice(0, visibleCount);
    const hasMore = visibleCount < filteredCountries.length;


    const value = useMemo<CountryContextType>(() => ({
        countries: displayedCountries,
        totalCount: filteredCountries.length,
        hasMore,
        loadMore,
        loading,
        error,
        search,
        setSearch: handleSetSearch,
        region,
        setRegion: handleSetRegion,
        favorites,
        addToFavorites,
        removeFromFavorites,
    }), [displayedCountries, filteredCountries.length, hasMore, loading, error, search, region, favorites]);

    return (
        <CountryContext.Provider value={value}>
            {children}
        </CountryContext.Provider>
    );
};