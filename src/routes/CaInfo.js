import { useLocation } from "react-router-dom";
import MovieBander from "../components/MovieBander";
import { useEffect, useState } from 'react';
import styles from './Cate.module.css';
import Header from "./Header";

function CaInfo() {
    const location = useLocation();
    const genre = location.state.genre;
    const option = location.state.option;
    console.log(genre, option)
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?genre=${genre}&limit=40&sort_by=${option}`)
        ).json();
        setMovies(json.data.movies);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <Header />
                <header className={styles.headerDemo}></header>
                <div className={styles.flexContainer}>
                    {movies.map(movie => (
                        <div className={styles.flexItem}>
                            <MovieBander
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image}
                                summary={movie.summary}
                                title={movie.title}
                                genres={movie.genres}
                                year={movie.year}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CaInfo;