import React, { useEffect, useState } from "react";
import "./search.scss";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { listCourses } from "../redux/coursesSlice";
import { AppDispatch } from "../../../redux/store";

const Search: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  const { courses, loading, error } = useSelector(
    (state: any) => state.courses
  );

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(listCourses(input));
    setInput("");
  };

  useEffect(() => {
    dispatch(listCourses(""));
  }, [dispatch]);

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
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {/* <div className="course-list">
        {courses.map((course: any) => (
          <div key={course.id} className="course-item">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Rating: {course.rating}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Search;
