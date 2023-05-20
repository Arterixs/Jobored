import { createContext } from 'react';
import { dataNav } from 'data/nav-data';
import { ContextData, ContextLoaded } from 'types/interface/context';

export const contextBody: ContextData = {
  navigation: dataNav,
  dropdownFilter: [],
  cardContent: [],
};

export const MyContext = createContext<ContextData>(contextBody);
export const Context = createContext<ContextLoaded | null>(null);
