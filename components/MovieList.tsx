import { Movie } from "@common/interfaces";
import MovieListItem from "./MovieListItem";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieListItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
