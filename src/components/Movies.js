import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './Movies.css';

import { ModalDetails } from './ModalDetails';
import IMG from '../images/no_image.png';

const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

export const Movies = props => {
  const { backdrop_path, title, overview, vote_average, id } = props;
  const img_source = backdrop_path ? `${BASE_IMG}${backdrop_path}` : IMG;

  const [details, setDetails] = useState('test');

  const handleClick = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=56ee74fd8cde9ed20ae0f8f19ae002ac`
    )
      .then(res => res.json())
      .then(data => {
        setDetails(data);
        setModalShow(true);
      });
  };

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className='movies-item' onClick={handleClick}>
        <img className='movies-item__img' src={img_source} alt='' />
        <div className='movies-item__details'>
          <p className='movies-item__details--title'>
            {title} | {vote_average}
          </p>
        </div>
      </div>
      <ModalDetails
        {...details}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
