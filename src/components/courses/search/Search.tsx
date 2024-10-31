import React, { useState } from 'react'
import './Search.scss';
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { listCourses } from '../redux/coursesSlice';
import { AppDispatch } from '../../../redux/store';

const Search = () => {
  const [input, setInput] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listCourses(input)); 
    setInput('')
  };

  return (
    <div className="wrap">
      <form className="search" onSubmit={submitHandler}>
        <input 
          type="text" 
          className="searchTerm" 
          placeholder="Search courses" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="searchButton">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
