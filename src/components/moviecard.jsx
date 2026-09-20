import { useState } from "react";

function MovieCard({ movie, imdbUrl }) {
    const [imageError, setImageError] = useState(false);

    const shortTitle =
        movie.title.length > 25
            ? movie.title.slice(0, 25) + "..."
            : movie.title;

    return (
        <div className="movie-column">
            <a
                href={imdbUrl}
                target="_blank"
                rel="noreferrer"
                className="movie-card"
            >
                {!imageError ? (
                    <img
                        src={movie.posterURL}
                        alt={movie.title}
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="no-poster">🎬</div>
                )}

                <div className="movie-info">
                    <h5>{shortTitle}</h5>
                </div>

                <div className="imdb-overlay">
                    View IMDb
                </div>
            </a>
        </div>
    );
}

export default MovieCard;