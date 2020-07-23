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
      <form onSubmit={handleSubmit} className='searchbar' role='search'>
        <h2 className='searchbar-title'>¿Qué quieres ver hoy?</h2>
        <div className='searchbar-child'>
          <input
            className='searchbar-input'
            placeholder='Search a movie here...'
            onChange={handleChange}
            type='text'
            value={keyword}
          />
          <button className='searchbar-button'>Search</button>
        </div>
      </form>
    </>
  );
};
