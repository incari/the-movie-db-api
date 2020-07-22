import React from 'react';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
const movieDefault = {
  img: 'https://zoomf7.files.wordpress.com/2019/08/fight-club-1.jpg',
  title: 'Fight Club',
  rating: '8.4',
  year: '1999',
  duration: '139'
};

export const Movies = props => {
  const { backdrop_path, title, overview, vote_average } = props;
  const img_source = `${BASE_IMG}${backdrop_path}`;
  return (
    <>
      <img className='movie-item__img' src={img_source} alt='' />
      <p className='carousel-item__details--title'>
        {title} | {vote_average}
      </p>
      <p className='carousel-item__details--subtitle'>{overview}</p>
    </>
  );
};
