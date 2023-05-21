import { createContext } from 'react';
import { dataNav } from 'data/nav-data';
import { ContextData, ContextInform, ContextLoaded } from 'types/interface/context';
import { btnPagination } from 'data/btn-pagination';

export const contextBody: ContextData = {
  navigation: dataNav,
  btnPages: btnPagination,
};

export const MyContext = createContext<ContextData>(contextBody);
export const Context = createContext<ContextLoaded | null>(null);
export const ContextInfo = createContext<ContextInform | null>(null);
