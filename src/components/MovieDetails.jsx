import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetailMovie } from "../services/call-api";
import BackToList from "./BackTo";
import "../App.css";

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { movieId } = useParams();

  const handleGetDetailMovie = async () => {
    const res = await getDetailMovie(movieId);
    setMovieDetail(res);
  };
  const genresList = movieDetail.genres
    ? movieDetail.genres.map((genre) => genre.name).join(", ")
    : "";
  const score = (movieDetail.vote_average / 10) * 100;

  useEffect(() => {
    handleGetDetailMovie();
  }, []);


  return (
    <div className="movie-detail-container">
      <BackToList />
      <section className="movie-detail">
        <div className="movie-detail__poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
        </div>
        <div className="movie-detail__summary">
          <h2>{movieDetail.title}</h2>
          <p>
            User Score:
            <strong>{score.toFixed(1)}%</strong>
          </p>
          <h3>Overview</h3>
          <p>{movieDetail.overview}</p>
          <h4>Genres</h4>
          <p>{genresList}</p>
        </div>
      </section>
      <section className="movie-more-info">
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
