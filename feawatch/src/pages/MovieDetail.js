import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MainContainer } from '../components/MainContainer';

import MovieList from '../components/MovieList';

import useFetch from '../hooks/useFetch';

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, error, performFetch] = useFetch(
    `https://www.omdbapi.com/?apikey=859c6fe2&i=${id}&plot=full`,
    setMovie,
  );

  useEffect(() => {
    performFetch();
  }, [id]);

  if (movie === null) {
    return (
      <>
        <div className="movie-details-reminder">
          <h4>Loading!</h4>
        </div>
      </>
    );
  } else if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <Header></Header>
      <MainContainer></MainContainer>
      <div className="card-detail-container">
        <img id="card-detail-image" src={movie.Poster} alt={movie.Title}></img>
        <div className="card-detail-content-wrapper">
          <h1 className="card-detail-title">{movie.Title}</h1>
          <p className="card-detail-year">{movie.Year}</p>
          <p className="card-detail-language">{movie.Language}</p>
          <p className="card-detail-run-time">{movie.Runtime}</p>
          <p className="card-detail-imdb-rating">{movie.imdbRating}</p>
          <p className="card-detail-director">{movie.Director}</p>
          <p className="card-detail-writer">{movie.Writer}</p>
          <p className="card-detail-actors">{movie.Actors}</p>
          <p className="card-detail-description">{movie.Plot}</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default MovieDetail;
