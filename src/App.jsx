import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import Trending from "./components/Trending";
import { Search } from "./components/Search";
import MovieDetails from "./components/MovieDetails";
import Reviews from "./components/Reviews";
import Cast from "./components/Cast";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Trending />} />
        <Route path="/goit-react-hw-05-movies/movies" element={<Search />} />
        <Route
          path="/goit-react-hw-05-movies/movies/:movieId"
          element={<MovieDetails />}
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
