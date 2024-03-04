'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import MyAvatar from './avatar';

function Header() {
  const { setTheme, resolvedTheme } = useTheme();

  const ThemeIcon = resolvedTheme === 'dark' ? SunIcon : MoonIcon;

  return (
    <header className="my-10 w-full">
      <div className="flex flex-row items-center justify-between">
        <MyAvatar />
        <button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          type="button"
          className="text-gray-400 rounded transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100 transition-colors hover:bg-gray-100 hover:dark:bg-neutral-800/30 p-2"
        >
          <ThemeIcon width="22px" height="22px" />
        </button>
      </div>
    </header>
  );
}

export default Header;
