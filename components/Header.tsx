import { useAuth } from "@contexts/AuthContext";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  const goToSearch = () => {
    router.push("/");
  };

  const goToWatchlist = () => {
    router.push("/watchlist");
  };

  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Watchlists</h1>
        <div className="space-x-4">
          <button
            className="text-white px-1 py-1 rounded-md font-semibold text-md"
            onClick={goToWatchlist}
          >
            My Watchlist
          </button>
          <button
            className="text-white px-1 py-1 rounded-md font-semibold text-md"
            onClick={goToSearch}
          >
            Search Movies
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md font-semibold hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
