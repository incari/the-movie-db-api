import React, { useCallback, useState } from 'react';
import { Movies } from './Movies';

export const MoviesWrapper = ({ children }) => {
  return (
    <>
      <section className='movies-wrapper'>{children}</section>
    </>
  );
};
