import { createContext } from 'react';
import { dataNav } from 'data/nav-data';
import { ContextData } from 'types/interface/context';
import { dropdownData } from 'data/dropdown-filter';
import { cardJobData } from 'data/card-job';

export const contextBody = {
  navigation: dataNav,
  dropdownFilter: dropdownData,
  cardContent: cardJobData,
};

export const MyContext = createContext<ContextData>(contextBody);
