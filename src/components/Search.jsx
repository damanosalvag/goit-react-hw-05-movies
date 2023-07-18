import { useState, useEffect } from "react";
import { getMoviesList } from "../services/call-api";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [listMovies, setListMovies] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleMovieList = async () => {
    const movies = await getMoviesList("search", query);
    setListMovies(movies);
    console.log(query);
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
          value={query}
        />
        <button type="submit">Search</button>
      </form>
      <section>
        <ul>
          {listMovies ? (
            listMovies.map((movie) => (
              <li key={nanoid(5)}>
                <Link to={`${movie.id}`}>{movie.original_title}</Link>
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
