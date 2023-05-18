import { Nav } from './nav';

export interface ContextData {
  navigation: Nav[];
  dropdownFilter: DropDownOptions[];
  cardContent: CardJobProperty[];
}

export interface DropDownOptions {
  id: number;
  role: string;
  text: string;
}

export interface CardJobProperty {
  title: string;
  salary: string;
  conditions: string;
  location: string;
}
