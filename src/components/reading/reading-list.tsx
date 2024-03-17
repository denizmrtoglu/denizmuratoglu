'use client';
import { useEffect, useState } from 'react';
import ReadingCard from './reading-card';
import { getBookmarkItems } from '@/lib/raindrop';
import { BookmarkResponseDTO } from '@/types/Bookmark';

export function ReadingList() {
  const [bookmarks, setBookmarks] = useState<BookmarkResponseDTO>();
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const newBookmarks = await getBookmarkItems(42607412, pageIndex); // id ve pageIndex parametrelerini gönder
      setBookmarks(newBookmarks);
    };

    fetchBookmarks();
  }, [pageIndex]);

  return (
    <div className="grid grid-cols-1 gap-4">
      {bookmarks?.items?.map((bookmark: any) => (
        <ReadingCard key={bookmark._id} bookmark={bookmark} />
      ))}
    </div>
  );
}
