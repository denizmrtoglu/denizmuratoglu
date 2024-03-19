'use client';

import MyAvatar from './avatar';
import { DesktopMenu } from './menu/desktop';
import { MobileMenu } from './menu/mobile';
import ThemeButton from './theme-button';

function Header() {
  return (
    <header className="w-full py-4 lg:border-b border-dashed border-slate-100 w-screen bg-background z-10">
      <div className="flex flex-row items-center justify-between mx-auto lg:max-w-7xl px-4">
        <MyAvatar />
        <div className="flex flex-row items-center space-x-1">
          <DesktopMenu />
          <MobileMenu />
          <div className="md:flex hidden">
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
