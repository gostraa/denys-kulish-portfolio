'use client';

import { Geist, Geist_Mono } from 'next/font/google';

import Provider from '@/components/ui/provider';
import { Box } from '@chakra-ui/react';
import Header from '@/components/Header';

import NavMenu from '@/components/NavMenu';
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Provider>
          <Box minH="100vh" color="white" bg="dark.130">
            <header>
              <Header />
            </header>
            <main>
              <NavMenu pathname={pathname} />
              {children}
            </main>
            <footer></footer>
          </Box>
        </Provider>
      </body>
    </html>
  );
}
