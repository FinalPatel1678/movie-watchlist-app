import { useState } from "react";
import MovieList from "./MovieList";
import Search from "./Search";
import withMovies from "@hocs/withMovies";

const MovieSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const MovieListWithLoading = withMovies(MovieList, searchQuery);
  return (
    <div className="bg-gray-200 p-4 rounded">
      <section className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-2">
          Welcome to <span className="text-blue-500">Watchlists!</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Find your favorite movies and manage your watchlist.
        </p>
      </section>

      <div className="mb-4">
        <Search onSearch={setSearchQuery} />
      </div>

      <MovieListWithLoading />
    </div>
  );
};

export default MovieSection;
