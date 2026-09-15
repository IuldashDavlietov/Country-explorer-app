import { createContext } from 'react';
import type { CountryContextType } from '../types/country.types';

export const CountryContext = createContext<CountryContextType | null>(null);