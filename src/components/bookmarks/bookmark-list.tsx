'use client';
import { useEffect, useState } from 'react';
import BookmarkCard from './bookmark-card';
import { getBookmarkItems } from '@/lib/raindrop';
import { BookmarkResponseDTO } from '@/types/Bookmark';

export function BookmarkList() {
  const [bookmarks, setBookmarks] = useState<BookmarkResponseDTO>();
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const newBookmarks = await getBookmarkItems(42537571, pageIndex); // id ve pageIndex parametrelerini gönder
      setBookmarks(newBookmarks);
    };

    fetchBookmarks();
  }, [pageIndex]);

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {bookmarks?.items?.map((bookmark: any) => (
        <BookmarkCard key={bookmark._id} bookmark={bookmark} />
      ))}
    </div>
  );
}
