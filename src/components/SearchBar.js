import React, { useState } from 'react';

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
      <form onSubmit={handleSubmit}>
        <input
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
