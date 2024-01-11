// Navbar.js
import { useEffect, useState } from "react";
import { ANIME } from "../lib/api.ts";
import { useDebounce } from "../hooks/useDebounce";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState("");
  const debouncedQuery = useDebounce<string>(searchQuery, 500);

  useEffect(() => {
    (async () => {
      const data = await ANIME.getTopAnime(debouncedQuery);
      setSearchData(data);
    })();
    console.log(searchData);
  }, [debouncedQuery]);

  return (
    <nav className="bg-gray-800/50 p-4 sticky top-0 z-50 flex">
      <div className="container ml-10 flex ">
        <div className="text-black text-lg mt-2 font-bold">Anime</div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          className="bg-gray-700 text-white ml-10 px-2 py-2 rounded-md w-96"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex justify-end ">
        <button className="ml-5 bg-blue-500 text-white px-4 py-2 rounded-md">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
