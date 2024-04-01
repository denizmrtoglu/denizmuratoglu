'use client';
import useBookmarks from '@/hooks/useBookmarks';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import BookmarkCard from './bookmark-card';

export function BookmarkList() {
  const { collections, bookmarksData, activeCollection, handleFilter } =
    useBookmarks();

  return (
    <>
      {collections?.items?.length > 0 && (
        <Tabs
          defaultValue="all"
          onValueChange={handleFilter}
          className="hidden md:flex"
        >
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            {collections.items.map((tag: any) => (
              <TabsTrigger key={tag.slug} value={tag._id}>
                {tag.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {bookmarksData[activeCollection]?.items.map((bookmark: any) => (
          <BookmarkCard key={bookmark._id} bookmark={bookmark} />
        ))}
      </div>
    </>
  );
}
