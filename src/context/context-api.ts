import { createContext } from 'react';
import { dataNav } from 'data/nav-data';
import { ContextData } from 'types/interface/context';

export const contextBody = {
  navigation: dataNav,
};

export const MyContext = createContext<ContextData>(contextBody);
