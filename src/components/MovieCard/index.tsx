import React, { FC } from 'react';

import { IMAGE_BASE_URL } from '../../constant';

import { MovieCardWrapper, StarIcon } from './style';
import { IMovieCard } from './interface';

const MovieCard: FC<IMovieCard> = ({ title, backdropPath, voteAverage }) => {
  const ratingAmountMap = Array.from(Array(Math.round(voteAverage)));
  return (
    <MovieCardWrapper>
      <div className="poster-wrapper">
        <img alt="movie poster" className="poster" src={IMAGE_BASE_URL + backdropPath} />
        <button className="favorite-action" onClick={() => {}}>
          click me
        </button>
      </div>

      <div className="rating">
        {ratingAmountMap.map((numb) => (
          <StarIcon key={numb} />
        ))}
      </div>

      <div className="title">{title}</div>
    </MovieCardWrapper>
  );
};

export default MovieCard;
