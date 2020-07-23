import React from 'react';
import './MoviesWrapper.css';

export const MoviesWrapper = ({ children }) => {
  return (
    <>
      <section className='movies'>
        <div className='movies__container'>{children}</div>
      </section>
    </>
  );
};
