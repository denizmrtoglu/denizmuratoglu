import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Deniz Muratoglu',
  description:
    'Personal blog with articles about web development, software engineering, and technology.',
  openGraph: {
    title: 'Blog | Deniz Muratoglu',
    description:
      'Personal blog with articles about web development, software engineering, and technology.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Deniz Muratoglu',
    description:
      'Personal blog with articles about web development, software engineering, and technology.'
  }
};

export default async function BlogPage() {
  return (
    <div className="flex flex-col lg:p-16 w-full py-4">
      <h1 className="text-xl md:text-3xl font-bold mb-6">Blog</h1>
      <p className="text-lg">Coming soon...</p>
    </div>
  );
}
