import React, { FC, useMemo } from 'react';

import Select from '../common/Select';

import { MovieFilterWrapper } from './style';
import { IMovieFilter } from './interfaces';

const MovieFilter: FC<IMovieFilter> = ({
  genres,
  updateFilter,
  filterGenre,
}) => {
  const genreFormatted = useMemo(() => {
    return [
      { value: 'latest', name: 'Latest' },
      ...genres.map(({ id, name }) => ({ value: `${id}`, name })),
    ];
  }, [genres]);
  return (
    <MovieFilterWrapper>
      <div className="filter-select">
        <Select
          value={filterGenre}
          options={genreFormatted}
          placeholder="Select filter..."
          onChange={({ value }) => {
            updateFilter({ genre: value });
          }}
        />
      </div>
    </MovieFilterWrapper>
  );
};

export default MovieFilter;
