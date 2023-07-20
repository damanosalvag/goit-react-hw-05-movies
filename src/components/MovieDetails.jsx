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
            className="movie-detail__poster--img"
          />
        </div>
        <div className="movie-detail__summary">
          <h1>{movieDetail.title}</h1>
          <p className="movie-detail__summary--score">
            User Score:
            <strong>{score.toFixed(1)}%</strong>
          </p>
          <h3 className="movie-detail__summary--overview">Overview</h3>
          <p>{movieDetail.overview}</p>
          <h4 className="movie-detail__summary--genres">Genres</h4>
          <p>{genresList}</p>
        </div>
      </section>
      <section className="movie-more-info">
        <div className="movie-more-info__container">
          <p className="movie-more-info__title">Additional Information</p>
          <ul className="movie-more-info__list">
            <li className="movie-more-info__list--item">
              <Link to="cast">Cast</Link>
            </li>
            <li className="movie-more-info__list--item">
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </section>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
