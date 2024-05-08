import { Urbanist } from 'next/font/google';

export const urbanist = Urbanist({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-urbanist',
  display: 'swap',
});
