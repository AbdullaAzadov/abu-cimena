import MovieListItem from "../MovieListItem/MovieListItem";
import style from "./MovieList.module.scss";

export default function MovieList({ movies, onClick }) {
    return (
        <ul className={style.movies}>
            {movies?.map((movie) => (
                <MovieListItem
                    key={movie.id}
                    movie={movie}
                    onClick={onClick}
                ></MovieListItem>
            ))}
        </ul>
    );
}
