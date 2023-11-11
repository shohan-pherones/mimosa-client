import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mimosa | Home',
  description: 'Mimosa is a beauty parlour and spa website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'bg-white text-black antialiased')}>
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
