import { Button } from '@/components/ui/button';
import { Stacks } from '@/lib/constants';
import { ExternalLinkIcon, TriangleRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Stack() {
  return (
    <div className="flex flex-col lg:p-16 w-full py-4 gap-4">
      {Stacks.map(stack => {
        return (
          <div
            key={stack.name}
            className="flex flex-col md:flex-row md:items-center items-start mb-4"
          >
            <Button variant="link" asChild className="p-0 m-0 h-min	">
              <Link href={stack.uri} target="blank">
                <>
                  <TriangleRightIcon />
                  <span className="font-bold">{stack.name}</span>
                  <ExternalLinkIcon />
                </>
              </Link>
            </Button>
            <span className="text-sm ml-2 text-gray-600">
              {stack.description}
            </span>
          </div>
        );
      })}
    </div>
  );
}
