import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio | Your Name',
  description: 'Personal portfolio showcasing projects, experience, and blog posts',
  keywords: ['portfolio', 'web developer', 'frontend', 'react', 'next.js'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Portfolio | Your Name',
    description: 'Personal portfolio showcasing projects, experience, and blog posts',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}