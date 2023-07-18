import { getMoviesList } from "../services/call-api";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const handleTrending = async () => {
    const res = await getMoviesList("trending");
    console.log(res);
    setTrending(res);
  };
  useEffect(() => {
    handleTrending();
  }, []);

  return (
    <>
      <h2>Trending</h2>
      {trending.length > 0 ? (
        <ul>
          {trending.map((movie) => (
            <li key={nanoid(5)}>
              <Link to={`movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>no found</p>
      )}
    </>
  );
};

export default Trending;
