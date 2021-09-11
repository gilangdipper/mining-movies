import React from 'react';

import { IAppContext } from './interfaces';

const AppContext = React.createContext<IAppContext | null>(null);

export default AppContext;
