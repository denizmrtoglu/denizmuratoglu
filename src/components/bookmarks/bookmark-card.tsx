/* eslint-disable @next/next/no-img-element */
import { BookmarkType } from '@/types/Bookmark';
import { BookmarkFilledIcon, Link2Icon } from '@radix-ui/react-icons';
import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card';
import Link from 'next/link';

interface Props {
  bookmark: BookmarkType;
}

function BookmarkCard({ bookmark }: Props) {
  return (
    <Link href={bookmark.link} target="blank">
      <Card className="cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-accent-foreground drop-shadow-md h-full	">
        <CardHeader className="gap-2">
          <span className="aspect-[1200/630] overflow-hidden rounded-lg">
            <img
              src={bookmark.cover}
              alt={bookmark.title}
              width={1200}
              height={630}
              className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
            />
          </span>
          <CardTitle>
            <p className="flex flex-row items-center gap-1 text-base ">
              <BookmarkFilledIcon className="min-w-4" />
              <span className="truncate">{bookmark.title}</span>
            </p>
          </CardTitle>
          <CardDescription className="line-clamp-2 min-h-10">
            {bookmark.excerpt}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription className="flex flex-row items-center gap-1">
            <Link2Icon className="min-w-4" />
            <span className="truncate">{bookmark.link}</span>
          </CardDescription>
        </CardContent>
        <CardFooter>
          {bookmark.tags.map(tag => (
            <Badge key={tag} variant={'secondary'}>
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}

export default BookmarkCard;
