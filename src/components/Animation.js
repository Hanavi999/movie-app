import MovieBander from "../components/MovieBander";
import { useEffect, useState } from 'react';

function Animation() {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?genre=animation&limit=3&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className="movie-body">
            {movies.map(movie => (
                <div className="movie-box">
                    <MovieBander
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        genres={movie.genres}
                        year={movie.year}
                    />
                </div>
            ))}
        </div>
    );
}

export default Animation;