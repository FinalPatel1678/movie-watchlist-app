import { Movie } from "@common/interfaces";

const fetchMovies = async (searchQuery: string | null): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${searchQuery}`
    );
    const data = await response.json();
    if (data && data.Search) {
      return data.Search;
    }
    throw new Error("No movies found.");
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies.");
  }
};

export { fetchMovies };
