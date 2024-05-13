import styles from './title.module.scss';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default Title;
