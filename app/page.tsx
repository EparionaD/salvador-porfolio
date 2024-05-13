import {
  Contacto,
  Footer,
  Gestion,
  Hero,
  Portafolio,
  Salvador,
} from '@/components';

export default function Home() {
  return (
    <main>
      <Hero />
      <Salvador />
      <Gestion />
      <Portafolio />
      <Contacto />
      <Footer />
    </main>
  );
}
