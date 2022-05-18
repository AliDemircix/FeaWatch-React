import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoriteContext from '../contexts/FavoriteContext';
export const Movie = ({ id, title, poster }) => {
  const { isFavorite, toggleFavorite } = useContext(FavoriteContext);
  const isFav = isFavorite(id);
  return (
    <div key={id} className="movie-card" id="movie-card">
      <img src={poster} alt={title}></img>
      <div className="movie-information" id="movie-information">
        <h1>{title}</h1>
        <p className="favorite-movie">
          <i
            id="fav-movie"
            className={
              isFav
                ? 'fa-solid fa-2x fa-heart active'
                : 'fa-solid fa-2x fa-heart '
            }
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(id);
            }}
          ></i>
        </p>
        <Link to={`/movie/${id}`} className="header-link">
          <p className="see-more">See Detail</p>
        </Link>
      </div>
    </div>
  );
};
