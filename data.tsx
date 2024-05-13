import { MdPhoneIphone, MdMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

export const itemsNavbar = [
  {
    id: 1,
    title: 'inicio',
    link: '/',
  },
  {
    id: 2,
    title: 'perfil',
    link: '#perfil',
  },
  {
    id: 3,
    title: 'gestión social',
    link: '#gestion',
  },
  {
    id: 4,
    title: 'producción audiovisual',
    link: '#produccion',
  },
  {
    id: 5,
    title: 'ux design',
    link: '#design',
  },
  {
    id: 6,
    title: 'contacto',
    link: '#contacto',
  },
];

export const itemsContacto = [
  {
    id: 1,
    icon: <MdPhoneIphone />,
    name: '962338129',
    link: 'https://wa.me/51962338129',
  },
  {
    id: 2,
    icon: <MdMail />,
    name: 'sdjpariona@gmail.com',
    link: 'mailto:sdjpariona@gmail.com',
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    name: 'salvadorpariona',
    link: 'https://www.linkedin.com/in/salvador-pariona-08372653/',
  },
];

export const itemsVisual = [
  {
    id: 1,
    area: 'img',
    image:
      'https://res.cloudinary.com/eparionad/image/upload/v1709825521/ayahuanco/AYAHUANCO_TRAILER.00_16_17_01.Imagen_fija108_szvrha.png',
    title: 'AYAHUANCO',
    year: '(2023)',
    type: 'Cortometraje',
    rol: 'Director',
    tam: '2rem',
  },
  {
    id: 2,
    area: 'img2',
    image:
      'https://res.cloudinary.com/eparionad/image/upload/v1709825521/ayahuanco/AYAHUANCO_TRAILER.00_16_17_01.Imagen_fija108_szvrha.png',
    title: 'CONTRATADO',
    year: '(2015)',
    type: 'Cortometraje',
    rol: 'Productor',
  },
  {
    id: 3,
    area: 'img3',
    image:
      'https://res.cloudinary.com/eparionad/image/upload/v1709825521/ayahuanco/AYAHUANCO_TRAILER.00_16_17_01.Imagen_fija108_szvrha.png',
    title: 'LA DANZA DEL ZORZAL',
    year: '(2012)',
    type: 'Documental',
    rol: 'Asistente de cámara',
  },
];

export const itemsDesign = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/eparionad/image/upload/v1683327685/porfolioSalvador/Mesa_de_trabajo_1_copia_7_wqelkm.png',
    title: 'PARENTHOOD',
    type: 'Parenthood es una aplicación para ayudar a las personas a aprender acerca de ser padres por primera vez.',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/eparionad/image/upload/v1683327685/porfolioSalvador/Mesa_de_trabajo_1_copia_dwp8xq.png',
    title: 'ANDES BUS',
    type: 'Andes Bus es una empresa de transportes que ofrece viajes a todo el Perú.',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/eparionad/image/upload/v1683327685/porfolioSalvador/Mesa_de_trabajo_1_bcdh26.png',
    title: 'LIKE HOME',
    type: 'Like Home es una aplicación para personas que quieren ordenar comida hecha en casa.',
  },
];

export const itemsGestion = [
  {
    id: 1,
    fondo: '#0597f2',
    title: 'Diagnósticos sociales',
    summary:
      'Evaluaciones sociales para la toma de decisiones en proyectos de inversión en comunidades. Esto implica un proceso integral que considere factores económicos y sociales, así como las complejidades de las dimensiones humanas, políticas y culturales inherentes a estos entornos.',
  },
  {
    id: 2,
    fondo: '#0482d0',
    title: 'Relaciones comunitarias',
    summary:
      'Establecer y mantener conexiones positivas entre las empresas y las personas. Esto implica comunicación abierta, promoción del diálogo y la participación activa de las comunidades. Construir confianza y colaboración para promover el bienestar y el desarrollo sostenible del área de influencia de los proyectos.',
  },
  {
    id: 3,
    fondo: '#024873',
    title: 'Gestión de conflictos sociales',
    summary:
      'Identificar, prevenir, gestionar y resolver conflictos sociales entre las empresas y las comunidades. A través del diálogo constructivo se busca soluciones con resultados a corto y largo plazo, que promuevan la reconciliación y el entendimiento mutuo. El objetivo es fomentar la paz social y el desarrollo sostenible en la comunidad.',
  },
];
