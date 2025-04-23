import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Footer, Header, Notification } from '@/components';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Positivus',
  description: 'Create a project for test, using next js, tailwind css',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased px-5 lg:px-24 pt-14 lg:max-w-[1440px] mx-auto`}
      >
        <Notification />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
