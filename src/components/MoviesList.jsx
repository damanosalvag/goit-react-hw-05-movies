import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MoviesList = ({ movies, baseUrl }) => {
  return (
    <ul>
      {movies ? (movies.map((movie) => (
        <li key={nanoid(5)}>
          <Link to={`${baseUrl}${movie.id}`}>{movie.title}</Link>
        </li>
      ))) : <p>nothing</p>}
    </ul>
  );
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  baseUrl: PropTypes.string.isRequired,
};


export default MoviesList;
