import { createContext } from 'react';
import { dataNav } from 'data/nav-data';
import { ContextData } from 'types/interface/context';
import { dropdownData } from 'data/dropdown-filter';

export const contextBody = {
  navigation: dataNav,
  dropdownFilter: dropdownData,
};

export const MyContext = createContext<ContextData>(contextBody);
