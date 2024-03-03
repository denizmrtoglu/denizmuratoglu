'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';

function Header() {
  const { setTheme, resolvedTheme } = useTheme();

  const ThemeIcon = resolvedTheme === 'dark' ? SunIcon : MoonIcon;

  return (
    <header className="my-10 w-full">
      <div className="flex flex-row items-center justify-between">
        <div className="text-3xl font-bold">
          <Link href="/">Deniz Muratoglu</Link>
        </div>
        <button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          type="button"
          className="text-gray-400 transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
        >
          <ThemeIcon width="22px" height="22px" />
        </button>
      </div>
    </header>
  );
}

export default Header;
