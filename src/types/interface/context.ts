import { Nav } from './nav';

export interface ContextData {
  navigation: Nav[];
  dropdownFilter: DropDownOptions[];
}

export interface DropDownOptions {
  id: number;
  role: string;
  text: string;
}
