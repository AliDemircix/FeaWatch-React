import { Movie } from './Movie';

function MovieList({ movies }) {
  return (
    <div className="results" id="results">
      {movies
        ? movies.map((movie) => {
            const { Poster, Title, imdbID } = movie;
            return <Movie id={imdbID} title={Title} poster={Poster} />;
          })
        : null}
    </div>
  );
}

export default MovieList;
