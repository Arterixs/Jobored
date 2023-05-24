import { ArrayVacancies, CatalogJobs } from './server';

export interface StateVacFilter {
  job: string;
  salaryFr: string;
  salaryUp: string;
}

export interface StateInfo {
  directoryIndustry: CatalogJobs[];
  listVacancies: ArrayVacancies[];
  total: number;
}

export interface StateDataRequest {
  pageBtn: string;
  filter: string;
  search: string;
}

export interface Store {
  error: boolean;
  countLoaders: number;
}
