import Image from 'next/image';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src='https://res.cloudinary.com/eparionad/image/upload/v1706752885/arcoIris-beta/a3d76cb953a7f7c8429c829aeeed7b67_hig3e9.png'
        width={1310}
        height={243}
        alt='Logo de Arco Iris'
        className={styles.footer__img}
      />
      <div className={styles.footer__container}>
        <p className={styles.footer__text}>
          &copy; 2024 Arco Iris Comunicación Integral
        </p>
        <p className={styles.footer__text}>Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
