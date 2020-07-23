import React, { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import { Movies } from '../components/Movies';
import { MoviesWrapper } from '../components/MoviesWrapper';

export const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(function() {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=56ee74fd8cde9ed20ae0f8f19ae002ac&page=1'
    )
      .then(r => r.json())
      .then(data => setMovieList(data.results));
  }, []);

  const handleSubitForm = ({ keyword }) => {
    if (keyword) {
      const url =
        'https://api.themoviedb.org/3/search/movie?api_key=56ee74fd8cde9ed20ae0f8f19ae002ac&query=';
      fetch(url + keyword)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
        .catch([]);
    } else {
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSubitForm} />
      <MoviesWrapper>
        {movieList.map(item => (
          <Movies key={item.id} {...item} />
        ))}
      </MoviesWrapper>
    </>
  );
};
