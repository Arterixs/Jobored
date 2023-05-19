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
