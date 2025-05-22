import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Raptor - 新一代CTF竞赛解题辅助工具',
  description: '帮助新手轻松上手CTF赛事的Agent工具',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Raptor - 新一代CTF竞赛解题辅助工具',
    description: '帮助新手轻松上手CTF赛事的Agent工具',
    images: [
      {
        url: '/images/raptor.png',
        width: 1200,
        height: 630,
        alt: 'Raptor Logo',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
