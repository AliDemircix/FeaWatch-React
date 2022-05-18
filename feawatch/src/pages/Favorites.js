import { useContext, useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MainContainer } from '../components/MainContainer';

import MovieList from '../components/MovieList';

import FavoriteContext from '../contexts/FavoriteContext';

function Favorites() {
  const { favorites } = useContext(FavoriteContext);

  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetches = favorites.map((id) =>
      fetch(`https://www.omdbapi.com/?apikey=859c6fe2&i=${id}&plot=full`),
    );

    setError(false);

    Promise.all(fetches)
      .then((results) => {
        return Promise.all(results.map((result) => result.json()));
      })
      .then((movies) => {
        setMovies(movies);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, [favorites]);

  if (error) {
    return 'Something went wrong finding the movie. Please try again!';
  } else if (isLoading) {
    return 'Loading...';
  } else if (movies === null || movies.length === 0) {
    return (
      <div style={{ textAlign: 'center', color: 'var(--darkRed)' }}>
        <Header></Header>
        <MainContainer></MainContainer>
        <h4>You haven't chosen any favorites yet!</h4>
        <Footer></Footer>
      </div>
    );
  }

  return (
    <>
      <Header></Header>
      <MainContainer></MainContainer>
      <MovieList movies={movies} />
      <Footer></Footer>
    </>
  );
}

export default Favorites;
