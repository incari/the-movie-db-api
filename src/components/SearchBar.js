import React, { useCallback, useState } from 'react';
import { getData } from '../services/getData';

export const SearchBar = () => {
  const [props, setProps] = useState();
  const [genres, setGenres] = useState();

  const handleClick = useCallback(() => {
    getData().then(res => {
      setProps(res);
      setGenres(res.genres[0].name);
      console.log(res);
    });
  }, []);
  return (
    <>
      <section className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
        <input type='text' placeholder='Buscar...' />

        <button onClick={handleClick}>serch</button>
      </section>
    </>
  );
};
