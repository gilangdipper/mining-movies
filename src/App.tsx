import React, { Reducer, useMemo, useReducer } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { AppContext } from './context';
import { appReducer, initialAppState } from './reducer';

import HomePage from './container/HomePage';
import FavoritePage from './container/FavoritePage';
import { IState, TAction } from './reducer/interfaces';

const App = () => {
  const [state, dispatch] = useReducer<Reducer<IState, TAction>>(
    appReducer,
    initialAppState,
  );
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <div className="App">
      <AppContext.Provider value={contextValue}>
        <Router>
          <Switch>
            <Route path="/favorites" component={FavoritePage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
