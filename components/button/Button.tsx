import Link from 'next/link';

import styles from './button.module.scss';

const Button = () => {
  return (
    <Link href='#' className={styles.button}>
      Ver tráiler
    </Link>
  );
};

export default Button;
