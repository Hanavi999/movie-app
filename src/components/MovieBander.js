import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MovieBander.css';

function MovieBander({ id, coverImg, title, year, genres}) {
    return(
        <div className="movie">
            <img src={coverImg} alt={title} className="movie__img" />
            <div className='movie-info'>
                <h2 className="movie__title">
                <Link to={`/movie/${id}`} className="title">{title}</Link>
                </h2>
                <h3 className="movie__year">{year}</h3>
                <ul className="movie__genres">
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

MovieBander.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieBander;