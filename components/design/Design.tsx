import { itemsDesign } from '@/data';
import styles from './design.module.scss';
import { Visual } from '@/components';

const Design = () => {
  return (
    <div className={styles.design}>
      <h2 className={styles.design__title} id='design'>
        UX Design
      </h2>
      <div className={styles.design__container}>
        {itemsDesign.map((item) => (
          <Visual
            key={item.id}
            image={item.image}
            title={item.title}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Design;
