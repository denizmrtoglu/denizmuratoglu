import { Hello } from '@/components/hello';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deniz Muratoglu | Software Engineer',
  description:
    'Personal website and portfolio of Deniz Muratoglu, a Software Engineer specializing in web development.',
  openGraph: {
    title: 'Deniz Muratoglu | Software Engineer',
    description:
      'Personal website and portfolio of Deniz Muratoglu, a Software Engineer specializing in web development.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deniz Muratoglu | Software Engineer',
    description:
      'Personal website and portfolio of Deniz Muratoglu, a Software Engineer specializing in web development.'
  }
};

export default function Home() {
  return (
    <div className="flex flex-1 w-full justify-center items-center flex-col">
      <Hello />
    </div>
  );
}
