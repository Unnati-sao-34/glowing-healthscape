
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full glass glass-dark transition-colors hover:bg-primary/10"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 transition-all ${theme === 'dark' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`} />
      <Moon className={`absolute h-5 w-5 transition-all ${theme === 'dark' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
    </button>
  );
}

export default ThemeToggle;
