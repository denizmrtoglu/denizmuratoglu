import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deniz Muratoglu',
  description: 'Software Engineer',
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
