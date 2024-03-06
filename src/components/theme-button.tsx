'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme();

  const ThemeIcon = resolvedTheme === 'dark' ? SunIcon : MoonIcon;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      type="button"
      className="rounded transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100 transition-colors hover:bg-accent p-2"
    >
      <ThemeIcon width="22px" height="22px" />
    </button>
  );
}

export default ThemeButton;
