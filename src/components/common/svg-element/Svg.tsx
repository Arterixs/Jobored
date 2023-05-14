import styles from './svg.module.css';

export const Svg = ({ id }: { id: string }) => (
  <svg className={styles.logo}>
    <use href={id} />
  </svg>
);
