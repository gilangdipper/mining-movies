import React, { FC } from 'react';

import { IMAGE_BASE_URL } from '../../constants';

import { HeartIcon, MovieCardWrapper, StarIcon } from './style';
import { IMovieCard } from './interface';

const MovieCard: FC<IMovieCard> = ({ title, posterPath, voteAverage }) => {
  const ratingAmountMap = Array.from(Array(Math.round(voteAverage)).keys());
  return (
    <MovieCardWrapper>
      <div className="poster-wrapper">
        <img alt="movie poster" className="poster" src={IMAGE_BASE_URL + posterPath} />
        <button className="favorite-action" onClick={() => {}}>
          <HeartIcon />
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
