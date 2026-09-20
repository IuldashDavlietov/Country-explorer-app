
import {  NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <NavLink to="/" className="text-xl font-bold">
         The Passport Index
        </NavLink>

        <div className="flex items-center gap-6">
          <NavLink 
            to="/favorites" 
            className={({ isActive }) => 
              isActive ? "font-semibold underline" : "hover:opacity-80 transition-opacity"
            }>
            Favorites
          </NavLink>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Toggle Theme" >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

      </div>
    </header>
  );
}