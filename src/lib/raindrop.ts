import { BookmarkResponseDTO } from '@/types/Bookmark';

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN}`
  }
};

const RAINDROP_API_URL = 'https://api.raindrop.io/rest/v1';

export const getBookmarkItems = async (
  id: number,
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
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    console.info(error);
    throw error;
  }
};
