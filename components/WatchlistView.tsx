import { useWatchlist } from "@contexts/WatchlistContext";
import React from "react";
import MovieList from "./MovieList";

const WatchlistView: React.FC = () => {
  const { watchlist } = useWatchlist();

  return (
    <div className="bg-gray-200 p-4 rounded">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-center">My Watchlist</h2>
      </div>

      {watchlist.length ? (
        <MovieList movies={watchlist} />
      ) : (
        <section className="text-center mt-24">
          <p className="text-gray-600 text-xl">Add movies to watchlist</p>
        </section>
      )}
    </div>
  );
};

export default WatchlistView;
