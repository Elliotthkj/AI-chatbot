import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elli-bott AI Chat',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        {/* {children} */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
