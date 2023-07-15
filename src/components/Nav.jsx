import "../App.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <Link to="/goit-react-hw-05-movies/">Home</Link>
        </li>
        <li>
          <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
};
