'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import MyAvatar from './avatar';
import { Menu } from './menu';

function Header() {
  const { setTheme, resolvedTheme } = useTheme();

  const ThemeIcon = resolvedTheme === 'dark' ? SunIcon : MoonIcon;

  return (
    <header className="my-10 w-full">
      <div className="flex flex-row items-center justify-between">
        <MyAvatar />
        <div className="flex flex-row items-center">
          <Menu />
          <button
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
            type="button"
            className="rounded transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100 transition-colors hover:bg-accent p-2"
          >
            <ThemeIcon width="22px" height="22px" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
