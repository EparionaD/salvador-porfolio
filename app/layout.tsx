import type { Metadata } from 'next';

import { urbanist } from '@/models/googlefonts.model';

import '@/styles/global.css';
import { Navbar } from '@/components';

export const metadata: Metadata = {
  title: 'Salvador Pariona - Portafolio',
  description:
    ' Soy un comunicador social con experiencia en gestión social, producción cinematográfica y UX Design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es-PE'>
      <body className={urbanist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
