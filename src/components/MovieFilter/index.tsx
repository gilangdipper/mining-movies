import React, { FC, useMemo } from 'react';

import Select from '../common/Select';

import { MovieFilterWrapper } from './style';
import { IMovieFilter } from './interfaces';

const MovieFilter: FC<IMovieFilter> = ({ genres }) => {
  const genreFormatted = useMemo(() => {
    return genres.map(({ id, name }) => ({ value: id, name }));
  }, [genres]);
  return (
    <MovieFilterWrapper>
      <div className="filter-select">
        <Select
          options={genreFormatted}
          placeholder="Select genre"
          onChange={({ value }) => {
            console.log('??', value);
          }}
        />
      </div>
    </MovieFilterWrapper>
  );
};

export default MovieFilter;
