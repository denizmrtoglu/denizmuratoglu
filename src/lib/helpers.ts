import { BookmarkResponseDTO } from '@/types/Bookmark';

export const filterBookmarksById = (
  data: BookmarkResponseDTO,
  id: number = 42607412
) => {
  const filtered = {
    ...data,
    items: [...data.items.filter(item => item.collection.$id !== id)]
  };
  return filtered as BookmarkResponseDTO;
};
