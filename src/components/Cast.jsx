import { getDetailMovie } from "../services/call-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";

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
    <section className="">
      <h3>Cast</h3>
      <ul>
        {cast.map((character) => (
          <li key={nanoid(5)}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
            ></img>
            <strong>{character.name}</strong>
            <p>{character.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Cast;
