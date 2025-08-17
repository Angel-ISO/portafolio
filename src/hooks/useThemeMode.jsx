import { useMemo, useState, useEffect, useCallback } from 'react';
import getTheme from '../theme/theme';

export const useThemeMode = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('themeMode') || (prefersDark.matches ? 'dark' : 'light');
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  useEffect(() => {
    const listener = (e) => {
      if (!localStorage.getItem('themeMode')) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };
    prefersDark.addEventListener('change', listener);
    return () => prefersDark.removeEventListener('change', listener);
  }, [prefersDark]);

  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = useMemo(() => getTheme(mode), [mode]);

  return { theme, mode, toggleMode };
};