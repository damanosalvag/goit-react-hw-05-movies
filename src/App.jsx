import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import Search from "./components/Search";
import Reviews from "./components/Reviews";
import Cast from "./components/Cast";
import Trending from "./components/Trending";
import { Suspense, lazy } from "react";
import DetailsLoader from "./components/Loading/Details";
const MovieDetails = lazy(() => import("./components/MovieDetails"));

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="container">
        <Routes>
          <Route path="/goit-react-hw-05-movies/" element={<Trending />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Search />} />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={
              <Suspense fallback={<DetailsLoader />}>
                <MovieDetails />
              </Suspense>
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

// import { lazy, Suspense } from "react";

// const MyComponent = lazy(() => import("path/to/MyComponent"));

// const App = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/some-path" element={<MyComponent />} />
//         {/* Otras rutas */}
//       </Routes>
//     </Suspense>
//   );
// };
