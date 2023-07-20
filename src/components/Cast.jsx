import { getDetailMovie } from "../services/call-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import "../App.css";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const handleCastList = async () => {
    const castList = await getDetailMovie(movieId, "credits");
    setCast(castList.cast);
  };

  useEffect(() => {
    handleCastList();
  }, []);
  return (
    <section className="movie-cast">
      <h3 className="movie-cast__title">Cast</h3>
      <ul className="cast-list">
        {cast.map((character) => (
          <li key={nanoid(5)} className="cast-list__item">
            <img
              src={
                character.profile_path
                  ? `https://image.tmdb.org/t/p/w500${character.profile_path}`
                  : "/goit-react-hw-05-movies/default_profile.png"
              }
              className="cast-list__item-img"
            ></img>
            <strong className="cast-list__item-name">{character.name}</strong>
            <p className="cast-list__item-character">{character.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Cast;
