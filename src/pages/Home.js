import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { Movies } from '../components/Movies';
import { MoviesWrapper } from '../components/MoviesWrapper';
const initialState = [
  {
    popularity: 39.11,
    vote_count: 19675,
    video: false,
    poster_path: '/wR5HZWdVpcXx9sevV1bQi7rP4op.jpg',
    id: 550,
    adult: false,
    backdrop_path: '/8iVyhmjzUbvAGppkdCZPiyEHSoF.jpg',
    original_language: 'en',
    original_title: 'Fight Club',
    genre_ids: [18],
    title: 'Fight Club',
    vote_average: 8.4,
    overview:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    release_date: '1999-10-15'
  }
];
export const Home = () => {
  const [movieList, setMovieList] = useState(initialState);

  const handleSubitForm = ({ keyword }) => {
    console.log('key', keyword);
    const url =
      'https://api.themoviedb.org/3/search/movie?api_key=56ee74fd8cde9ed20ae0f8f19ae002ac&query=';
    fetch(url + keyword)
      .then(res => res.json())
      .then(data => setMovieList(data.results))
      .catch([]);
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
