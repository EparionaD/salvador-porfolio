import { Title } from '@/components';
import styles from './contacto.module.scss';
import { itemsContacto } from '@/data';
import Link from 'next/link';

const Contacto = () => {
  return (
    <article className={styles.contacto} id='contacto'>
      <Title title='contacto' />
      <div className={styles.contacto__container}>
        {itemsContacto.map((item) => (
          <div key={item.id} className={styles.contacto__link}>
            <span className={styles.contacto__icon}>{item.icon}</span>
            <Link
              href={item.link}
              target='_blank'
              className={styles.contacto__name}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Contacto;
