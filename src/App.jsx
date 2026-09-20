import { useEffect, useState } from "react";
import MovieCard from "./components/moviecard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  {/*
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 16;
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
 */}

  // get movies from API
  useEffect(() => {
    fetch("https://api.sampleapis.com/movies/classic")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong.");
        setLoading(false);
      });
  }, []);

  // filter movie by title
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container-fluid py-5 px-5">
      <img
        src="pop.png"
        alt="logo"
        className="d-block mx-auto"
        width="100"
      />

      <h1 className="text-center">PopBox</h1>

      <p className="text-center">
        Where Movies Meet Popcorn
      </p>

      <div className="d-flex search-box">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          className="form-control"
        />

        <button className="btn btn-warning ms-2">
          Search
        </button>

        <button
          className="btn btn-secondary ms-2"
          onClick={() => {
            setSearchText("");
          }}
        >
          Clear
        </button>
      </div>

      {loading ? (
        <p className="message">Loading movies...</p>
      ) : error ? (
        <p className="message">{error}</p>
      ) : filteredMovies.length > 0 ? (
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      ) : (
        <p className="message">No movies found.</p>
      )}

      {/* pagination */}
      {/*

      <div className="text-center mt-4">
        <button
          className="btn btn-secondary me-2"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-white">
          Page {currentPage}
        </span>

        <button
          className="btn btn-warning ms-2"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= filteredMovies.length}
        >
          Next
        </button>
      </div>
    */}
    </div>
  );
}

export default App;