import { ReadingList } from '@/components/reading/reading-list';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reading List | Deniz Muratoglu',
  description:
    'Collection of articles, books, and resources that I find interesting and worth sharing.',
  openGraph: {
    title: 'Reading List | Deniz Muratoglu',
    description:
      'Collection of articles, books, and resources that I find interesting and worth sharing.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reading List | Deniz Muratoglu',
    description:
      'Collection of articles, books, and resources that I find interesting and worth sharing.'
  }
};

export default async function ReadingPage() {
  return (
    <div className="flex flex-col lg:p-16 w-full py-4">
      <h1 className="text-xl md:text-3xl font-bold mb-6">Reading List</h1>
      <ReadingList />
    </div>
  );
}
