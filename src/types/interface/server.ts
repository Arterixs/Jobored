export interface Authorization {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  reg_user_resumes_count: number;
  token_type: string;
  ttl: string;
}

export interface CatalogJobs {
  key: number;
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
  positions: JobsPositions[];
}

interface JobsPositions {
  id_parent: number;
  key: number;
  title: string;
  title_rus: string;
  url_rus: string;
}

export interface Vacancies {
  more: boolean;
  objects: ArrayVacancies[];
  subscription_active: boolean;
  subscription_id: boolean;
  total: number;
}

export interface ArrayVacancies {
  id: number;
  address: string;
  age_from: number;
  age_to: number;
  profession: string;
  firm_name: string;
  town: VacanciesTown;
  type_of_work: VacanciesWork;
  payment_from: number;
  payment_to: number;
  currency: string;
  vacancyRichText: string;
}

interface VacanciesTown {
  declension: string;
  genitive: string;
  hasMetro: boolean;
  id: number;
  title: string;
}

interface VacanciesWork {
  id: number;
  title: string;
}
