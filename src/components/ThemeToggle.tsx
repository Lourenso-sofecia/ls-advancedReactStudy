import { useThemeStore } from "../stores/themeStore";

import {Sun, Moon} from "lucide-react";


export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun aria-label="Sun mode" className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon aria-label="Dark mode" className="w-6 h-6 text-blue-500" />
      )}
    </button>
  );
}