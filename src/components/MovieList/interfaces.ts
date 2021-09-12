import { IAppContext } from '../../context/interfaces';
import { IMovie } from '../../interfaces';

export interface IMovieList {
  addToFavorites: (movie: IMovie) => void;
  isFavoritePage?: boolean;
  isFetching: boolean;
  isLoadingMore: boolean;
  loadMoreAction?: () => void;
  movieFavorites: IAppContext['state']['movieFavorites'];
  movies: IAppContext['state']['movies'];
}
