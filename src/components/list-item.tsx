import React from 'react';
import { cn } from '@/lib/utils';
import { NavigationMenuLink } from './ui/navigation-menu';
import Link from 'next/link';

export const ListItem = ({ href, title, children }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href={href}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
