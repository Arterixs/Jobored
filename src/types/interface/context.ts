import { ActionReducerInfo, ActionsReducer } from 'types/types/actions';
import { Nav } from './nav';
import { ArrayVacancies, CatalogJobs } from './server';
import { StateInfo } from './states';
import { Store } from './store';

export interface ContextData {
  navigation: Nav[];
  dropdownFilter: CatalogJobs[];
  cardContent: ArrayVacancies[];
  btnPages: BtnPagination[];
}

export interface DropDownOptions {
  id: number;
  role: string;
  text: string;
}

export interface CardJobProperty {
  id?: number;
  title: string;
  salaryFrom: number;
  salaryTo: number;
  currency: string;
  conditions: string;
  location: string;
}

interface BtnPagination {
  id: number;
}

export interface ContextLoaded {
  state: Store;
  dispatch: React.Dispatch<ActionsReducer>;
}

export interface ContextInform {
  state: StateInfo;
  dispatch: React.Dispatch<ActionReducerInfo>;
}
