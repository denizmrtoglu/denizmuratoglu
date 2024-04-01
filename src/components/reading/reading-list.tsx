'use client';
import { getReadingItems } from '@/lib/raindrop';
import { BookmarkResponseDTO } from '@/types/Bookmark';
import { useEffect, useState } from 'react';
import ReadingCard from './reading-card';

export function ReadingList() {
  const [readings, setReadings] = useState<BookmarkResponseDTO>();
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const fetchReadings = async () => {
      const data = await getReadingItems(pageIndex);
      setReadings(data);
    };

    fetchReadings();
  }, [pageIndex]);

  return (
    <div className="grid grid-cols-1 gap-4">
      {readings?.items?.map((bookmark: any) => (
        <ReadingCard key={bookmark._id} bookmark={bookmark} />
      ))}
    </div>
  );
}
