import React, { FC, useMemo } from 'react';

import Select from '../common/Select';

import { MovieFilterWrapper } from './style';
import { IMovieFilter } from './interfaces';

const MovieFilter: FC<IMovieFilter> = ({ genres, updateFilter }) => {
  const genreFormatted = useMemo(() => {
    return genres.map(({ id, name }) => ({ value: `${id}`, name }));
  }, [genres]);
  return (
    <MovieFilterWrapper>
      <div className="filter-select">
        <Select
          options={genreFormatted}
          placeholder="Select genre"
          onChange={({ value }) => {
            updateFilter({ genre: value });
          }}
        />
      </div>
    </MovieFilterWrapper>
  );
};

export default MovieFilter;
