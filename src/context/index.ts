import React from 'react';
import { initialAppState } from '../reducer';

import { IAppContext } from './interfaces';

export const AppContext = React.createContext<IAppContext>({
  state: initialAppState,
  dispatch: () => {},
});

export const useAppContext = () => React.useContext(AppContext);
