import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"

function MovieListing() {
    const movies = useSelector((state) => state.movies.movies);

    let renderMovies =
        movies.Response === "True" ? (
            movies.Search.map((movie, index) => {
                return <MovieCard key={index} data={movie} />
            })
        ) : (
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        );
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">{renderMovies}</div>
            </div>
        </div>
    );
}

export default MovieListing;
