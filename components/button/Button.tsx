import Link from 'next/link';

import styles from './button.module.scss';

interface PropsButton {
  url: string;
  title: string;
}

const Button = ({ url, title }: PropsButton) => {
  return (
    <Link href={url} className={styles.button}>
      {title}
    </Link>
  );
};

export default Button;
