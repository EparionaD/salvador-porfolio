import { Design, Title } from '@/components';
import styles from './portafolio.module.scss';
import { Audiovisual } from '@/components';

const Portafolio = () => {
  return (
    <article className={styles.portafolio}>
      <Title title='portafolio' />
      <Audiovisual />
      <Design />
    </article>
  );
};

export default Portafolio;
