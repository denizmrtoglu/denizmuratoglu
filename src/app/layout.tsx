import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deniz Muratoglu | Software Engineer',
  description:
    'Personal portfolio and blog of Deniz Muratoglu, Software Engineer specializing in web development and modern JavaScript frameworks',
  keywords: [
    'Software Engineer',
    'Web Development',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript'
  ],
  authors: [{ name: 'Deniz Muratoglu' }],
  creator: 'Deniz Muratoglu',
  publisher: 'Deniz Muratoglu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://denizmuratoglu.com',
    title: 'Deniz Muratoglu | Software Engineer',
    description:
      'Personal portfolio and blog of Deniz Muratoglu, Software Engineer specializing in web development and modern JavaScript frameworks',
    siteName: 'Deniz Muratoglu',
    images: [{ url: '/opengraph-image.png' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deniz Muratoglu | Software Engineer',
    description:
      'Personal portfolio and blog of Deniz Muratoglu, Software Engineer specializing in web development and modern JavaScript frameworks',
    images: ['/twitter-image.png']
  },
  icons: {
    icon: [
      {
        url: '/light-icon.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/dark-icon.png',
        media: '(prefers-color-scheme: dark)'
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="px-4 mx-auto lg:max-w-7xl">
            <main className="flex min-h-screen flex-col items-center h-full">
              <Header />
              {children}
              <Analytics />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
