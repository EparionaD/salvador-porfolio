import Image from 'next/image';
import styles from './visual.module.scss';

interface VisualProps {
  area?: string;
  image: string;
  title: string;
  year?: string;
  type: string;
  rol?: string;
  tam?: string;
}

const Visual = ({ area, image, title, year, type, rol, tam }: VisualProps) => {
  return (
    <div className={styles.visual} style={{ gridArea: `${area}` }}>
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
  );
};

export default Visual;
