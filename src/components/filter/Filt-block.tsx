import { ReactNode } from 'react';

export const FiltBlock = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <h3>{title}</h3>
    {children}
  </div>
);
