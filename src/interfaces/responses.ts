import { IGenre, IMovie } from '.';

export interface IMovieResponses {
  page?: number;
  results?: IMovie[];
  total_results?: number;
  total_pages?: number;
}

export interface IGenreResponses {
  genres?: IGenre[];
}
