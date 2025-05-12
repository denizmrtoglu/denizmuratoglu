import { BookmarkList } from '@/components/bookmarks/bookmark-list';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bookmarks | Deniz Muratoglu',
  description:
    'A collection of useful resources, tools, and websites I find valuable and want to share.',
  openGraph: {
    title: 'Bookmarks | Deniz Muratoglu',
    description:
      'A collection of useful resources, tools, and websites I find valuable and want to share.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bookmarks | Deniz Muratoglu',
    description:
      'A collection of useful resources, tools, and websites I find valuable and want to share.'
  }
};

export default async function BookmarksPage() {
  return (
    <div className="flex flex-col lg:p-16 w-full py-4">
      <h1 className="text-xl md:text-3xl font-bold mb-6">Bookmarks</h1>
      <BookmarkList />
    </div>
  );
}
