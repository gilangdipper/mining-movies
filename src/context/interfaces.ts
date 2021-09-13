import React from 'react';
import { IState, TAction } from '../reducer/interfaces';

export interface IAppContext {
  state: IState;
  dispatch: React.Dispatch<TAction>;
}
