import { Visual } from '@/components';
import styles from './audiovisual.module.scss';
import { itemsVisual } from '@/data';

const Audiovisual = () => {
  return (
    <div className={styles.audiovisual}>
      <h2 className={styles.audiovisual__title} id='produccion'>
        Producción audiovisual
      </h2>
      <div className={styles.audiovisual__container}>
        {itemsVisual.map((item) => (
          <Visual
            key={item.id}
            area={item.area}
            image={item.image}
            title={item.title}
            year={item.year}
            type={item.type}
            rol={item.rol}
            tam={item.tam}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Audiovisual;
