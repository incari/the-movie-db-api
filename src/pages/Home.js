import React, { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import { Movies } from '../components/Movies';
import { MoviesWrapper } from '../components/MoviesWrapper';

const initialState = [
  {
    poster_path: '/wR5HZWdVpcXx9sevV1bQi7rP4op.jpg',
    id: 550,
    backdrop_path: '/8iVyhmjzUbvAGppkdCZPiyEHSoF.jpg',
    original_title: 'Fight Club',
    title: 'Fight Club',
    vote_average: 8.4
  },
  {
    id: 680,
    video: false,
    vote_count: 19138,
    vote_average: 8.5,
    title: 'Pulp Fiction',
    release_date: '1994-09-10',
    original_language: 'en',
    original_title: 'Pulp Fiction',
    genre_ids: [80, 53],
    backdrop_path: '/eDMZmfnH50DDboUxTRnOYYpE9aY.jpg',
    adult: false,
    overview:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    poster_path: '/yAaf4ybTENKPicqzsAoW6Emxrag.jpg',
    popularity: 50.046
  },
  {
    adult: false,
    backdrop_path: '/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg',
    genre_ids: [9648, 53],
    id: 77,
    original_language: 'en',
    original_title: 'Memento',
    overview:
      "Leonard Shelby is tracking down the man who raped and murdered his wife. The difficulty of locating his wife's killer, however, is compounded by the fact that he suffers from a rare, untreatable form of short-term memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he's going, or why.",
    poster_path: '/uprP8rtOgMYJQ2h3ldDFvGsaBgH.jpg',
    release_date: '2000-10-11',
    title: 'Memento',
    video: false,
    vote_average: 8.2,
    vote_count: 9735,
    popularity: 32.283
  }
];
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
