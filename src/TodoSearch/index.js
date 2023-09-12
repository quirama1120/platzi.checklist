import React from "react";
import "./TodoSearch.css";


function TodoSearch({searchValue, setSearchValue, loading}) {
  
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      id= 'input'
      name='input'
      className="TodoSearch"
      placeholder="Busca tu tarea"
      value={searchValue}
      onChange={handleSearchInputChange}
      disabled={loading}
      
    ></input>
  );
}

export { TodoSearch };
