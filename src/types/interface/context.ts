import { Nav } from './nav';
import { ArrayVacancies, CatalogJobs } from './server';

export interface ContextData {
  navigation: Nav[];
  dropdownFilter: CatalogJobs[];
  cardContent: ArrayVacancies[];
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
