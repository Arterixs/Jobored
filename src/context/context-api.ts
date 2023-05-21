import { createContext } from 'react';
import { dataNav } from 'data/nav-data';
import { ContextData, ContextLoaded } from 'types/interface/context';
import { btnPagination } from './btn-pagination';

export const contextBody: ContextData = {
  navigation: dataNav,
  btnPages: btnPagination,
  dropdownFilter: [],
  cardContent: [],
};

export const MyContext = createContext<ContextData>(contextBody);
export const Context = createContext<ContextLoaded | null>(null);
