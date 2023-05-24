import { ReactNode } from 'react';
import styles from './filt-block.module.css';

export const FiltBlock = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className={styles.section}>
    <h3 className={styles.title}>{title}</h3>
    {children}
  </section>
);
