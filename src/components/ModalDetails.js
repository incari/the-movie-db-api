import React from 'react';
import { Modal } from 'react-bootstrap';
import './ModalDetails.css';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

export const ModalDetails = props => {
  let poster = `${BASE_IMG}${props.poster_path}`;

  return (
    <Modal
      {...props}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.original_title} | Rating: {props.vote_average}
        </Modal.Title>
      </Modal.Header>
      <div className='modal-content__container'>
        <img
          className='modal-content__poster'
          src={poster}
          alt={props.original_title}
        />
        <div className='modal-content__description'>
          <h4>About</h4>
          <p className='modal-content__description'>{props.overview}</p>
        </div>
      </div>
      <Modal.Footer>
        <button className='modal-close' onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
