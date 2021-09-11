import React from 'react';

import AppContext from './context';
import { appReducer, initialAppState } from './reducer';

import HomePage from './container/HomePage';

function App() {
  const [state, dispatch] = React.useReducer(appReducer, initialAppState);
  const contextValue = React.useMemo(() => {
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
