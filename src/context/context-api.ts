import { createContext } from 'react';
import { ContextData, ContextInform, ContextLoaded } from 'types/interface/context';
import { contextBody } from 'data/context-body';

export const MyContext = createContext<ContextData>(contextBody);
export const Context = createContext<ContextLoaded | null>(null);
export const ContextInfo = createContext<ContextInform | null>(null);
