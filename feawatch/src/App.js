import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
import { FavoriteContextProvider } from './contexts/FavoriteContext';
import FilteredMovies from './pages/FilteredMovies';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <FavoriteContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/movies/:search/:selectedCategory/:selectedDate"
            element={<FilteredMovies />}
          />
          <Route
            path="/movies/:search/:selectedCategory"
            element={<FilteredMovies />}
          />
          <Route path="/movies/:search" element={<FilteredMovies />} />
          <Route
            path="/movies/:search/:selectedDate"
            element={<FilteredMovies />}
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </FavoriteContextProvider>
  );
}

export default App;
