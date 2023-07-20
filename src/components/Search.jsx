import { useState, useEffect } from "react";
import { getMoviesList } from "../services/call-api";
import { useSearchParams } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ProgressBar } from "react-loader-spinner";
import "../App.css";
const MoviesList = lazy(() => import("./MoviesList"));

const Search = () => {
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
      <h2 className="search-title">Searcher</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleMovieList();
        }}
        className="search-form"
      >
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={searchQuery}
          className="search-input"
        />
        <button type="submit" className="submit-btn">
          Search
        </button>
      </form>
      <section>
        <Suspense
          fallback={
            <div className="loading-list">
              <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor="#ffffff"
                barColor="#646cff"
              />
            </div>
          }
        >
          <MoviesList movies={listMovies} baseUrl={""} />
        </Suspense>
      </section>
    </>
  );
};

export default Search;
