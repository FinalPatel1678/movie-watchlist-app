import useDebounce from "@hooks/useDebounce";
import React, { useEffect, useState } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearch = useDebounce(onSearch, 500);

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [debouncedSearch, searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearClick = () => {
    setSearchQuery("");
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search Movie..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full mr-2 px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        style={{ maxWidth: "calc(100% - 8rem)" }}
      />

      <button
        type="button"
        onClick={handleClearClick}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
        style={{ minWidth: "8rem" }}
      >
        Clear
      </button>
    </div>
  );
};

export default Search;
