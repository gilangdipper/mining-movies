import React, { Reducer, useMemo, useReducer } from 'react';

import { AppContext } from './context';
import { appReducer, initialAppState } from './reducer';

import HomePage from './container/HomePage';
import { IState, TAction } from './reducer/interfaces';

function App() {
  const [state, dispatch] = useReducer<Reducer<IState, TAction>>(appReducer, initialAppState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <div className="App">
      <AppContext.Provider value={contextValue}>
        <HomePage />
      </AppContext.Provider>
    </div>
  );
}

export default App;
