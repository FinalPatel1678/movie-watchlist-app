import { Movie } from "@common/interfaces";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

interface WatchlistContextType {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (imdbID: string) => void;
}

const WatchlistContext = createContext<WatchlistContextType>({
  watchlist: [],
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
});

export const useWatchlist = () => useContext(WatchlistContext);

export const WatchlistProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const storedWatchlist = localStorage.getItem(`watchlist_${user}`);
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist));
    } else {
      setWatchlist([]);
    }
  }, [user]);

  const saveWatchlistToLocalStorage = (watchlist: Movie[]) => {
    localStorage.setItem(`watchlist_${user}`, JSON.stringify(watchlist));
  };

  const addToWatchlist = (movie: Movie) => {
    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    saveWatchlistToLocalStorage(updatedWatchlist);
  };

  const removeFromWatchlist = (imdbID: string) => {
    const updatedWatchlist = watchlist.filter(
      (movie) => movie.imdbID !== imdbID
    );
    setWatchlist(updatedWatchlist);
    saveWatchlistToLocalStorage(updatedWatchlist);
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
