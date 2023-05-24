import { ReactNode } from 'react';
import styles from './wrapper.module.css';

export const Wrapper = ({ children }: { children: ReactNode }) => <div className={styles.wrapper}>{children}</div>;
