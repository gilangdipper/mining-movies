import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { IMovie } from '../../interfaces';
import { IMAGE_BASE_URL } from '../../constants';

import { IMovieCard } from './interface';
import { HeartRegularIcon, HeartSolidIcon, StarIcon } from './style';
import MovieCard from '.';

const movieMock: IMovie = {
  adult: false,
  backdrop_path: '/nDLylQOoIazGyYuWhk21Yww5FCb.jpg',
  genre_ids: [28, 12, 14],
  id: 566525,
  original_language: 'en',
  original_title: 'Shang-Chi and the Legend of the Ten Rings',
  overview:
    'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
  popularity: 3247.45,
  poster_path: '/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
  release_date: '2021-09-01',
  title: 'Shang-Chi and the Legend of the Ten Rings',
  video: false,
  vote_average: 8.25,
};

describe('Movie Card', () => {
  const props: IMovieCard = {
    onClickFavorite: () => {},
    isFavorited: false,
    posterPath: movieMock.poster_path,
    title: movieMock.title,
    voteAverage: movieMock.vote_average,
  };
  const movieCard = (addProps?: Partial<IMovieCard>): ShallowWrapper =>
    shallow(<MovieCard {...props} {...addProps} />);

  test('Should display title, poster and rating properly', () => {
    expect(movieCard().find('.title').text()).toBe(movieMock.title);
    expect(movieCard().find(StarIcon).length).toBe(8);
    expect(movieCard().find('.poster').prop('src')).toBe(
      IMAGE_BASE_URL + movieMock.poster_path,
    );
  });

  test('Should display love marker if user add the movie to movie favorite list', () => {
    expect(movieCard().find('.movie-favorite-marker').exists()).toBe(false);
    expect(
      movieCard({ isFavorited: true }).find('.movie-favorite-marker').exists(),
    ).toBe(true);
  });

  test('Should execute onClickFavorite func when click button favorite action', () => {
    const favoriteFunction = jest.fn();
    const mvCard = movieCard({ onClickFavorite: favoriteFunction });

    mvCard.find('button.favorite-action').simulate('click');
    expect(favoriteFunction).toBeCalled();

    expect(
      movieCard()
        .find('button.favorite-action')
        .contains(<HeartRegularIcon />),
    ).toBe(true);
    expect(
      movieCard({ isFavorited: true })
        .find('button.favorite-action')
        .contains(<HeartSolidIcon />),
    ).toBe(true);
  });
});
