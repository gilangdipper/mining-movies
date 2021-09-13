import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { NavigatorWrapper } from './style';
import { INavigator } from './interfaces';

const NAVIGATOR_MAP = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/favorites',
    name: 'favorites',
  },
];

const Navigator: FC<INavigator> = ({ favoriteNumber }) => {
  let history = useHistory();

  return (
    <NavigatorWrapper>
      {NAVIGATOR_MAP.map(({ path, name }) => (
        <button
          className="navigator-item"
          key={name}
          onClick={() => {
            history.push(path);
          }}
        >
          {name}
          {name === 'favorites' && <span>{`(${favoriteNumber})`}</span>}
        </button>
      ))}
    </NavigatorWrapper>
  );
};

export default Navigator;
