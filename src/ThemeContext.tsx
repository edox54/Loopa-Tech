import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | null>(null);

// Client wants a clean white site: light by default, dark only when the visitor picks it.
// New storage key so the old auto-saved OS preference doesn't keep people in dark.
const KEY = 'loopa-theme-choice';

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Starts as light to match the prerendered HTML; the inline script in index.html already
  // painted the dark class, so this only syncs the toggle icon after hydration.
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) === 'dark') setTheme('dark');
    } catch {
      /* storage blocked: stay light */
    }
  }, []);

  const toggleTheme = () =>
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      try {
        localStorage.setItem(KEY, next);
      } catch {
        /* storage blocked */
      }
      return next;
    });

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
