import { IMovie } from '../../interfaces';

export interface IMovieList {
  movies: IMovie[];
  isLoading: boolean;
}
