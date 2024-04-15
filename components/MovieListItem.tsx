import { Movie } from "@common/interfaces";
import { useWatchlist } from "@contexts/WatchlistContext";
import Image from "next/image";

interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  const { addToWatchlist, removeFromWatchlist, watchlist } = useWatchlist();

  const isMovieInWatchlist = (imdbID: string) =>
    watchlist.some((movie) => movie.imdbID === imdbID);

  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden relative">
      <Image
        src={movie.Poster}
        alt={movie.Title}
        width="100"
        height="100"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{movie.Title}</h3>
        <p className="text-gray-500 mb-4">{movie.Year}</p>
      </div>
      <button
        onClick={() =>
          isMovieInWatchlist(movie.imdbID)
            ? removeFromWatchlist(movie.imdbID)
            : addToWatchlist(movie)
        }
        className="absolute bottom-0 left-0 w-full px-2 py-1 bg-blue-500 text-sm text-white font-semibold rounded-b-lg focus:outline-none hover:bg-blue-600 transition duration-300"
      >
        {isMovieInWatchlist(movie.imdbID)
          ? "Remove from Watchlist"
          : "Add to Watchlist"}
      </button>
    </li>
  );
};

export default MovieListItem;
