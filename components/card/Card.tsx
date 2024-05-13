'use client';

import { useState } from 'react';
import styles from './card.module.scss';

interface PropsCard {
  fondo: string;
  title: string;
  summary: string;
}

const Card = ({ fondo, title, summary }: PropsCard) => {
  const [clicFront, setClicFront] = useState(false);

  const onClicUno = () => {
    setClicFront(true);
  };

  const onClicDos = () => {
    setClicFront(false);
  };
  return (
    <div className={styles.card}>
      <div
        className={`${styles.card__uno} ${clicFront ? styles.show : ''}`}
        style={{ backgroundColor: `${fondo}` }}
      >
        <h2 className={styles.card__title}>{title}</h2>
        <div onClick={onClicUno} className={styles.card__button}>
          Ver más
        </div>
      </div>
      <div
        onClick={onClicDos}
        className={`${clicFront ? styles.card__dos : ''}`}
        style={{ backgroundColor: `${fondo}` }}
      >
        <h3 className={styles.card__subtitle}>{title}</h3>
        <p className={styles.card__summary}>{summary}</p>
      </div>
    </div>
  );
};

export default Card;
