import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MovieList from '../components/MovieList';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MainContainer } from '../components/MainContainer';

import useFetch from '../hooks/useFetch';

function FilteredMovies() {
  const { search, selectedCategory, selectedDate } = useParams();
  const API = 'https://www.omdbapi.com/?apikey=859c6fe2';
  const url = `${API}&s=${search}&type=${
    selectedCategory ? selectedCategory : ''
  }&y=${selectedDate ? selectedDate : ''}`;

  const [data, setData] = useState(null);
  const [isDataLoading, dataError, performFetchData] = useFetch(url, setData);

  useEffect(() => {
    performFetchData();
  }, [search]);
  console.log(data);
  if (dataError) {
    return 'Unable to get the characters, please try again';
  } else if (isDataLoading || data === null) {
    return 'Loading...';
  }

  return (
    <>
      <Header></Header>
      <MainContainer></MainContainer>
      <MovieList movies={data.Search} />
      <Footer></Footer>
    </>
  );
}

export default FilteredMovies;
