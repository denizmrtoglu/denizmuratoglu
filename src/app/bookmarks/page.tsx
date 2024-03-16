import { BookmarkList } from '@/components/bookmarks/bookmark-list';

export default async function Bookmarks() {
  return (
    <div className="flex flex-col lg:p-16 w-full py-4">
      <BookmarkList />
    </div>
  );
}
