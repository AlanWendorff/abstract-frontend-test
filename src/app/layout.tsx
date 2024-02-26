import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import MetaTags from '@components/shared/MetaTags';
import '@styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MetaTags />
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}