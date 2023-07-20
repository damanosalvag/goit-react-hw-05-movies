import { getMoviesList } from "../services/call-api";
import { useState, useEffect } from "react";
import { Suspense, lazy } from "react";
import { ProgressBar } from "react-loader-spinner";
import "../App.css";
const MoviesList = lazy(() => import("./MoviesList"));

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const handleTrending = async () => {
    const res = await getMoviesList("trending");
    setTrending(res);
  };
  useEffect(() => {
    handleTrending();
  }, []);

  return (
    <>
      <h2 className="trending-title">Trending</h2>
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
        <MoviesList movies={trending} baseUrl={"movies/"} />
      </Suspense>
    </>
  );
};

export default Trending;
