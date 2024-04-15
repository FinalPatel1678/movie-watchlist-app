import { Movie } from "@common/interfaces";
import Loader from "@components/Loader";
import { useToast } from "@contexts/ToastContext";
import { fetchMovies as fetchMoviesService } from "@services/imdbService";
import { useState, useEffect } from "react";

const withMovies = (
  WrappedComponent: React.ComponentType<{ movies: Movie[]; loading: boolean }>,
  searchQuery: string | null = ""
) => {
  const WithMovies: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { showError } = useToast();

    useEffect(() => {
      const fetchMovies = async () => {
        setLoading(true);
        try {
          const movies = await fetchMoviesService(searchQuery);
          setMovies(movies);
        } catch (error) {
          setMovies([]);
          if (error instanceof Error) {
            showError(error.message);
          }
          console.error("Error fetching movies:", error);
        } finally {
          setLoading(false);
        }
      };

      if (!searchQuery) return;
      fetchMovies();
    }, []);

    if (loading) return <Loader />;
    return <WrappedComponent movies={movies} loading={loading} />;
  };

  return WithMovies;
};

export default withMovies;
