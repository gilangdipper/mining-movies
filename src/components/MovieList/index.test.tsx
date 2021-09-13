import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { IMovie } from '../../interfaces';

import { IMovieList } from './interfaces';
import MovieList from '.';

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

describe('Movie List', () => {
  const props: IMovieList = {
    addToFavorites: () => {},
    isFavoritePage: false,
    isFetching: false,
    isLoadingMore: false,
    loadMoreAction: () => {},
    movieFavorites: {},
    movies: [movieMock, { ...movieMock, title: 'Wiro Sableng 3' }],
  };
  const movieCard = (addProps?: Partial<IMovieList>): ShallowWrapper =>
    shallow(<MovieList {...props} {...addProps} />);

  test('Should display movie list properly', () => {
    expect(movieCard().find('.movie-box').length).toBe(2);
    expect(movieCard({ movies: [] }).find('.movie-box').length).toBe(0);
  });

  test('Should display movie loading properly', () => {
    expect(movieCard().find('.movie-loading').exists()).toBe(false);
    expect(
      movieCard({ isFetching: true }).find('.movie-loading').exists(),
    ).toBe(true);
    expect(
      movieCard({ isLoadingMore: true }).find('.movie-loading').exists(),
    ).toBe(true);
  });

  test('Should display movie loading properly', () => {
    expect(movieCard().find('.no-movie').exists()).toBe(false);
    expect(movieCard({ movies: [] }).find('.no-movie').exists()).toBe(true);
    expect(
      movieCard({ movies: [], isFetching: true }).find('.no-movie').exists(),
    ).toBe(false);
    expect(
      movieCard({ movies: [], isLoadingMore: true }).find('.no-movie').exists(),
    ).toBe(false);
  });
});
