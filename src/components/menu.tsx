'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import Image from 'next/image';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Blog',
    href: '/',
    description:
      'Explore insights on tech, my experiences, and industry trends.'
  },
  {
    title: 'Stack',
    href: '/',
    description:
      'Discover my tech tools, languages, and frameworks I work with.'
  },
  {
    title: 'Bookmark',
    href: '/',
    description:
      'Curated list of impactful articles, tools, and tech resources.'
  },
  {
    title: 'Reading',
    href: '/',
    description:
      'Essential articles and blogs for tech enthusiasts and professionals.'
  }
];

export function Menu() {
  return (
    <NavigationMenu className="md:flex hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md justify-between"
                    href="/"
                  >
                    <Image
                      src="./assets/sosio.svg"
                      alt="@profile-picture"
                      className="rounded flex-1"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                    />

                    <div>
                      <div className="mb-2 mt-4 text-lg font-medium">sosio</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {`Turning ideas into reality with expertise and
                        dedication.`}
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                {`Overview of my background and interests.`}
              </ListItem>
              <ListItem href="/" title="Journey">
                {`The road I've traveled in tech, from start to here.from start to here.from start to here.`}
              </ListItem>
              <ListItem href="/" title="Resume">
                {`Snapshot of my skills, experiences, and where I've made an
                impact.`}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Insights & Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
