import React, { FC } from 'react';

import { MovieBoxWrapper } from './style';
import { IMovieBox } from './interface';

const MovieBox: FC<IMovieBox> = ({ title }) => {
  return (
    <MovieBoxWrapper>
      <div className="title">{title}</div>
    </MovieBoxWrapper>
  );
};

export default MovieBox;
