import { ArrayVacancies, CatalogJobs } from './server';

export interface StateVacFilter {
  job: string;
  salaryFr: string;
  salaryUp: string;
}

export interface StateInfo {
  directoryIndustry: CatalogJobs[];
  listVacancies: ArrayVacancies[];
}

export interface StateDataRequest {
  pageBtn: string;
  filter: string;
  search: string;
}
