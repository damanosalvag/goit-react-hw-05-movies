import { useState, useEffect } from "react";
import { getMoviesList } from "../services/call-api";
import { Link, useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";

export const Search = () => {
  const [listMovies, setListMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") ?? "";

  const handleChange = (e) => {
    const query = e.target.value;
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };
  const handleMovieList = async () => {
    const movies = await getMoviesList("search", searchQuery);
    setListMovies(movies);
  };
  useEffect(() => {
    handleMovieList();
  }, []);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleMovieList();
        }}
      >
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={searchQuery}
        />
        <button type="submit">Search</button>
      </form>
      <section>
        <ul>
          {listMovies ? (
            listMovies.map((movie) => (
              <li key={nanoid(5)}>
                <Link
                  to={`${movie.id}`}
                >
                  {movie.original_title}
                </Link>
              </li>
            ))
          ) : (
            <p>No matches!</p>
          )}
        </ul>
      </section>
    </>
  );
};
