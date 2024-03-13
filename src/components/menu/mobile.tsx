import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { ABOUT_ME_LINKS, INSIGHTS_LINKS } from '@/lib/constants';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ListItem } from '../list-item';
import ThemeButton from '../theme-button';
import { NavigationMenu } from '../ui/navigation-menu';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { useState } from 'react';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="flex md:hidden">
        <Button variant="outline">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="w-4/5 px-0 py-3 flex flex-col gap-0"
        side={'left'}
      >
        <SheetHeader className="flex flex-row px-2">
          <ThemeButton />
        </SheetHeader>
        <Separator className="mt-2 mb-4" />
        <ScrollArea className="flex-1">
          <NavigationMenu onClick={() => setOpen(false)}>
            <ul className="grid gap-2 px-3">
              <SheetTitle>About Me</SheetTitle>
              {ABOUT_ME_LINKS.map(item => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
              <Separator className="my-4" />
              <SheetTitle>Insights & Resources</SheetTitle>
              {INSIGHTS_LINKS.map(item => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
              <Separator className="my-4" />
              <ListItem title={'Contact'} href={'/'}></ListItem>
            </ul>
          </NavigationMenu>
          {/* <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
  </DrawerFooter> */}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
