import React, { useState } from 'react';
import './SearchBar.css';

export const SearchBar = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ keyword });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
        <input
          className='input'
          placeholder='Search a movie here...'
          onChange={handleChange}
          type='text'
          value={keyword}
        />
        <button>Search</button>
      </form>
    </>
  );
};
