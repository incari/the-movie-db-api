import React from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';
import { ModalDetails } from './ModalDetails';
import IMG from '../images/no_image.png';

const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

export const Movies = props => {
  const { backdrop_path, title, overview, vote_average, id } = props;
  const img_source = backdrop_path ? `${BASE_IMG}${backdrop_path}` : IMG;

  const handleClick = () => {
    console.log(id);
  };

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className='movies-item' onClick={() => setModalShow(true)}>
        <img className='movies-item__img' src={img_source} alt='' />
        <div className='movies-item__details'>
          <p className='movies-item__details--title'>
            {title} | {vote_average}
          </p>
          <p className='movies-item__details--subtitle'>{overview}</p>
        </div>
      </div>
      <ModalDetails show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
