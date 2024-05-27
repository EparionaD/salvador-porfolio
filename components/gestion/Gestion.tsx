import { Button, Card, Title } from '@/components';
import styles from './gestion.module.scss';
import { itemsGestion } from '@/data';

const Gestion = () => {
  return (
    <article className={styles.gestion} id='gestion'>
      <Title title='gestión social' />
      <p>
        Como especialista en gestión social en los sectores minería,
        hidrocarburos y energía, he desarrollado las siguientes actividades en
        mi experiencia laboral:
      </p>
      <div className={styles.gestion__container}>
        {itemsGestion.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            summary={item.summary}
            fondo={item.fondo}
          />
        ))}
      </div>
      <div className={styles.gestion__button}>
        <Button
          url='https://workdrive.zohoexternal.com/external/a7a2c7781be4d34e420f03e2bd0ff3a348b824ab61f15123062922e68bf2914e'
          title='ver cv'
        />
      </div>
    </article>
  );
};

export default Gestion;
