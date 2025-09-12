'use client';

import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { ABOUT_ME_LINKS, INSIGHTS_LINKS } from '@/lib/constants';
import Image from 'next/image';
import { ListItem } from '../list-item';

export function DesktopMenu() {
  return (
    <NavigationMenu className="md:flex hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid p-4 md:w-[400px] lg:w-[500px] lg:grid-rows-2 lg:grid-flow-col">
              {ABOUT_ME_LINKS.map(item => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
              {/*<li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md justify-between"
                    href="http://www.sosio.com.tr"
                    target="_blank"
                  >
                    <Image
                      src="/assets/sosio.svg"
                      alt="Sosio Logo"
                      className="dark:invert my-auto"
                      width={120}
                      height={36}
                      priority
                    />

                    <div>
                      <div className="mb-2 mt-4 text-lg font-medium">sosio</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {`A revolution in the modern working world!`}
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>*/}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Insights & Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid p-4 md:w-[400px] lg:w-[500px] lg:grid-rows-2 lg:grid-flow-col">
              {INSIGHTS_LINKS.map(item => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
