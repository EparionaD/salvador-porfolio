'use client';

import Image from 'next/image';
import styles from './hero.module.scss';
import { Button } from '@/components';
import { useState } from 'react';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import '@/styles/global.css';

const Hero = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <article className={styles.hero}>
      <div className={styles.hero__containerLogo}>
        <Image
          src='https://res.cloudinary.com/eparionad/image/upload/v1715138775/salvador/Ayahuanco_logo_k2qyq8_jwbtmg.png'
          width={1559}
          height={502}
          alt='Logo Ayahuanco'
          className={styles.hero__img}
        />
        <p>Un cortometraje de Salvador Pariona</p>
      </div>
      <div className={styles.logos}>
        <div className={styles.logos__button}>
          <div onClick={onOpenModal}>
            <Button url='#' title='ver tráiler' />
          </div>
          <Modal
            open={open}
            onClose={onCloseModal}
            center
            classNames={{
              modal: 'customModal',
            }}
          >
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/gKQ-Ue2GuM4?si=dzwqoaNmSWlQWXQG'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          </Modal>
        </div>
        <div className={styles.logos__container}>
          <Image
            src='https://res.cloudinary.com/eparionad/image/upload/v1709691730/ayahuanco/Imagen_pegada_2-removebg-preview_ajfpdb.png'
            width={253}
            height={90}
            alt='Logo del ministerio de cultura'
            className={styles.logos__img}
          />
          <Image
            src='https://res.cloudinary.com/eparionad/image/upload/v1715139208/salvador/logoArcoIris_sm0qnl.png'
            width={100}
            height={24}
            alt='Logo del Arco Iris Comunicación Integral'
            className={styles.logos__img}
          />
          <Image
            src='https://res.cloudinary.com/eparionad/image/upload/v1715139263/salvador/mayu_nrcmks.png'
            width={48}
            height={30}
            alt='Logo de Mayu'
            className={styles.logos__img}
          />
        </div>
      </div>
    </article>
  );
};

export default Hero;
