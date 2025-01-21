import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-800 
                 text-gray-800 dark:text-gray-200 transition-all duration-300
                 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none 
                 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={24} />
      ) : (
        <Moon size={24} />
      )}
    </button>
  );
};

export default ThemeSwitcher;