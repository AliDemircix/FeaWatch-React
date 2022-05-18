import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const MainContainer = ({ selectedCat }) => {
  const date = [];
  for (let i = 2022; i > 1980; i--) {
    date.push(i);
  }
  const categories = ['movie', 'episode', 'series'];
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [search, setSearchValue] = useState('');
  const navigate = useNavigate();

  const searchMovie = () => {
    if (search === undefined || search === '') {
      alert('You need to enter a movie name!');
    } else {
      navigate(`/movies/${search}/${selectedCategory}/${selectedDate}`);
    }
  };
  return (
    <div className="container" id="container">
      <div className="search-bar" id="search-bar">
        <input
          className="search-input"
          id="search-input"
          type="text"
          placeholder="Search with Title"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <button
          type="submit"
          onClick={searchMovie}
          className="search-button"
          id="search-button"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <select
          className="search-by-category"
          id="search-by-category"
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
        >
          {categories.map((category) => {
            return <option value={category}>{category}</option>;
          })}
        </select>
        <select
          className="dateSelect"
          id="dateSelect"
          onChange={(e) => {
            setSelectedDate(e.target.value);
          }}
        >
          {date.map((d) => {
            return <option value={d}>{d}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
