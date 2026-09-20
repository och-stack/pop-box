import { useState } from "react";

function MovieCard({ movie }) {
    const [imageError, setImageError] = useState(false);

    const shortTitle =
        movie.title.length > 25
            ? movie.title.slice(0, 25) + "..."
            : movie.title;

    return (
        <div className="movie-column">
            <div className="movie-card">
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
            </div>
        </div>
    );
}

export default MovieCard;