export interface IMovieCard {
  onClickFavorite: () => void;
  isFavorited: boolean;
  posterPath: string;
  title: string;
  voteAverage: number;
}
