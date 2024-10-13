export default function MovieListItem({ movie, onClick }) {
    return (
        <div
            className="movie"
            style={{ background: `url('${movie.poster}')` }}
            onClick={() => onClick(movie.id)}
        >
            <div className="movie-info">
                <h4 className="movie-title">{movie.title}</h4>
                <div className="movie-details">
                    <p>{movie.year}</p> <p>{movie.rating}⭐</p>
                </div>
            </div>
        </div>
    );
}
