import React, { useState } from 'react';

const SearchBar = ({ setInput , input, students }) => {

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search by name"
      />
      <button type="submit">Search</button>
   </>
  );
};

export default SearchBar;
