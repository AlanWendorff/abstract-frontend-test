import { FC } from 'react';
import { Metadata } from 'next';
import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import TChildren from 'types/shared/children.type';
import '@styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokemon Challenge',
  description: 'Abstract frontend challenge.'
};

const RootLayout: FC<TChildren> = ({ children }) => (
  <html lang='en'>
    <body className={inter.className}>
      <ChakraProvider>{children}</ChakraProvider>
    </body>
  </html>
);

export default RootLayout;
