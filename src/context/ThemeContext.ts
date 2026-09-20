import { createContext } from 'react';
import type { ThemeContextType } from '../types/country.types';

export const ThemeContext = createContext<ThemeContextType | null>(null);