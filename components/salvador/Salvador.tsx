'use client';

import Image from 'next/image';

import { MdMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

import styles from './salvador.module.scss';
import Link from 'next/link';

const Salvador = () => {
  return (
    <article className={styles.salvador} id='perfil'>
      <div className={styles.salvador__texts}>
        <h1 className={styles.salvador__title}>Salvador Pariona</h1>
        <p className={styles.salvador__subtitle}>Comunicador Social</p>
      </div>
      <Image
        src='https://res.cloudinary.com/eparionad/image/upload/v1683252576/porfolioSalvador/339151952_163502496629315_2817647897500916235_n_esxlns.jpg'
        width={720}
        height={960}
        alt='Retrato de Salvador Pariona'
        className={styles.salvador__img}
      />
      <p className={styles.salvador__summary}>
        ¡Hola! Soy un comunicador social con experiencia en gestión social,
        producción cinematográfica y UX Design.
      </p>
      <div className={styles.salvador__icons}>
        <Link
          href='mailto:sdjpariona@gmail.com'
          className={styles.salvador__icon}
          target='_blank'
        >
          <MdMail className={styles.salvador__ic} />
        </Link>
        <Link
          href='https://www.linkedin.com/in/salvador-pariona-08372653/'
          className={styles.salvador__icon}
          target='_blank'
        >
          <FaLinkedin className={styles.salvador__ic} />
        </Link>
      </div>
    </article>
  );
};

export default Salvador;
