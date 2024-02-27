import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Top from '@components/shared/Navbar';
import LAYOUT_METADATA from '@constants/metadata';
import { Inter } from 'next/font/google';
import TChildren from 'types/shared/children.type';
import '@styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = LAYOUT_METADATA;

const RootLayout: FC<TChildren> = ({ children }) => (
  <html lang='en'>
    <body className={inter.className} style={{ marginRight: '0 !important' }}>
      <Top />
      <ChakraProvider>{children}</ChakraProvider>
    </body>
  </html>
);

export default RootLayout;
