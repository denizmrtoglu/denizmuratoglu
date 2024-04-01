import { getBookmarkItems, getCollections } from '@/lib/raindrop';
import { useState, useEffect, useCallback } from 'react';

const useBookmarks = () => {
  const [collections, setCollections] = useState<any>();
  const [bookmarksData, setBookmarksData] = useState<{
    [key: string]: { items: any[]; pageIndex: number };
  }>({});
  const [activeCollection, setActiveCollection] = useState('all');

  useEffect(() => {
    const fetchInitialData = async () => {
      const collectionsData = await getCollections();
      setCollections(collectionsData);

      const bookmarkData = await getBookmarkItems('0', 0);
      setBookmarksData({
        all: { items: bookmarkData.items, pageIndex: 0 }
      });
    };

    fetchInitialData();
  }, []);

  const handleFilter = useCallback(
    async (collectionId: string) => {
      setActiveCollection(collectionId);

      if (!bookmarksData[collectionId]) {
        const newBookmarks = await getBookmarkItems(collectionId, 0);
        setBookmarksData(prev => ({
          ...prev,
          [collectionId]: { items: newBookmarks.items, pageIndex: 0 }
        }));
      }
    },
    [bookmarksData]
  );

  return { collections, bookmarksData, activeCollection, handleFilter };
};

export default useBookmarks;
