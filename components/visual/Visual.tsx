'use client';

import Image from 'next/image';
import { useState } from 'react';

import styles from './visual.module.scss';
import { PiArrowElbowUpLeftBold } from 'react-icons/pi';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import '@/styles/global.css';

interface VisualProps {
  area?: string;
  image: string;
  title: string;
  url?: string;
  year?: string;
  type: string;
  rol?: string;
  tam?: string;
}

const Visual = ({
  area,
  image,
  title,
  year,
  type,
  rol,
  tam,
  url,
}: VisualProps) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const closeIcon = <PiArrowElbowUpLeftBold className={styles.visual__close} />;
  return (
    <>
      <div
        className={styles.visual}
        style={{ gridArea: `${area}` }}
        onClick={onOpenModal}
      >
        <Image
          src={image}
          width={1920}
          height={1080}
          alt={title}
          className={styles.visual__img}
        />
        <div className={styles.visual__text}>
          <h2
            className={styles.visual__title}
            style={{ fontSize: `${tam ? tam : ''}` }}
          >
            {title}
          </h2>
          <p
            className={styles.visual__title}
            style={{ fontSize: `${tam ? tam : ''}` }}
          >
            {year}
          </p>
          <p className={styles.visual__type}>{type}</p>
          <p className={styles.visual__rol}>{rol}</p>
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        closeIcon={closeIcon}
        classNames={{
          modal: 'customModal',
        }}
      >
        <div className={styles.visual__background}>
          <iframe
            width='100%'
            height='100%'
            src={url}
            title={title}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

export default Visual;
