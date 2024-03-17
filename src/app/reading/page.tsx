import { ReadingList } from '@/components/reading/reading-list';

export default async function Bookmarks() {
  return (
    <div className="flex flex-col lg:p-16 w-full py-4">
      <ReadingList />
    </div>
  );
}
