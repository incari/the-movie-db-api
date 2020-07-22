import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Movies } from '../components/Movies';
import { MoviesWrapper } from '../components/MoviesWrapper';
import { initialState } from '../initialState.json';
const movieList = [
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
  },
  {
    popularity: 16.867,
    id: 345922,
    video: false,
    vote_count: 833,
    vote_average: 6,
    title: 'Fist Fight',
    release_date: '2017-02-16',
    original_language: 'en',
    original_title: 'Fist Fight',
    genre_ids: [35],
    backdrop_path: '/kIWWulkzc3kELHJx84l3JNeZmzz.jpg',
    adult: false,
    overview:
      'When one school teacher gets the other fired, he is challenged to an after-school fight.',
    poster_path: '/yONLyCSO0zyDvmVJO2i1U4yrNHE.jpg'
  },
  {
    popularity: 15.426,
    id: 653727,
    video: false,
    vote_count: 0,
    vote_average: 0,
    title: 'The Fight',
    release_date: '2020-07-31',
    original_language: 'en',
    original_title: 'The Fight',
    genre_ids: [99],
    backdrop_path: null,
    adult: false,
    overview:
      'At this defining moment in American history, THE FIGHT follows a scrappy team of heroic ACLU lawyers in an electrifying battle over abortion rights, immigrant rights, LGBTQ rights and voting rights.',
    poster_path: '/bxcRFMO2lC5chBoCQSsrzCvXv6z.jpg'
  }
];
export const Home = () => {
  return (
    <>
      <SearchBar />
      <MoviesWrapper>
        {movieList.map(item => (
          <Movies key={item.id} {...item} />
        ))}
      </MoviesWrapper>
    </>
  );
};
