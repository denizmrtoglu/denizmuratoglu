import { Card, CardContent } from '@/components/ui/card';
import { SocialLinks } from '@/lib/constants';
import Link from 'next/link';
import ContactIcon from './contact-icon';

export function ContactList() {
  return (
    <div className="inline-grid md:grid-cols-3 grid-cols-2 gap p-4 md:w-2/3 w-full self-center">
      <div className="p-1 col-span-2 flex flex-col items-center justify-center mb-6 md:mb-0">
        <span className="text-sm">{`Ready to Connect?`}</span>
        <span className="text-md font-bold">{`Let's Get in Touch!`}</span>
      </div>
      {SocialLinks.map((item, index) => (
        <Link
          key={index}
          href={item.uri}
          target="blank"
          className="cursor-pointer p-1 col-span-1"
        >
          <Card className="transition-colors duration-300 hover:bg-accent hover:text-accent-foreground drop-shadow-md">
            <CardContent className="flex aspect-square items-center justify-center p-6 gap-1 flex-col">
              <ContactIcon keyProp={item.icon} />
              <span className="text-sm">{item.name}</span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
