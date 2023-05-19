import { createContext } from 'react';
import { dataNav } from 'data/nav-data';
import { ContextData } from 'types/interface/context';

export const contextBody: ContextData = {
  navigation: dataNav,
  dropdownFilter: [],
  cardContent: [],
};

export const MyContext = createContext<ContextData>(contextBody);
