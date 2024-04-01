import { cache } from 'react';
import { BookmarkResponseDTO } from '@/types/Bookmark';
import { filterBookmarksById } from './helpers';

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN}`
  }
};

const RAINDROP_API_URL = 'https://api.raindrop.io/rest/v1';

export const getBookmarkItems = async (
  id: string,
  pageIndex = 0
): Promise<BookmarkResponseDTO> => {
  try {
    const response = await fetch(
      `${RAINDROP_API_URL}/raindrops/${id}?` +
        new URLSearchParams({
          page: pageIndex.toString(),
          perpage: '50'
        }),
      options
    );
    const parsed = (await response.json()) as BookmarkResponseDTO;

    return filterBookmarksById(parsed);
  } catch (error) {
    console.info(error);
    throw error;
  }
};

export const getReadingItems = async (
  pageIndex = 0
): Promise<BookmarkResponseDTO> => {
  try {
    const response = await fetch(
      `${RAINDROP_API_URL}/raindrops/42607412?` +
        new URLSearchParams({
          page: pageIndex.toString(),
          perpage: '50'
        }),
      options
    );
    const parsed = (await response.json()) as BookmarkResponseDTO;

    return parsed;
  } catch (error) {
    console.info(error);
    throw error;
  }
};

export const getCollections = async (): Promise<any> => {
  try {
    const response = await fetch(
      `${RAINDROP_API_URL}/collections/childrens`,
      options
    );
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    console.info(error);
    throw error;
  }
};

export const getCollectionById = cache(async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${RAINDROP_API_URL}/collection/${id}`,
      options
    );
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    console.info(error);
    throw error;
  }
});
