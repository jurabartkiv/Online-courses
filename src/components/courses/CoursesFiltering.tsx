import React, { useEffect, useState } from "react";
import "./Courses.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { filter } from "./redux/coursesSlice";
import Tab from "./Tab";

export default function CoursesFiltering() {
  const dispatch: AppDispatch = useDispatch();
  const courses = useSelector((state: any) => state.courses.filteredCourses);

  const activeTab = useSelector((state: any) => state.courses.filterByTag);

  const handleFiltering = (e: any, keyValue: any) => {
    dispatch(filter({ title: e.target.textContent, value: keyValue }));
  };

  return (
    
    <div className="courses">
      <div className="filtering">
        <h1>Courses</h1>
        <div className="allFilters">
          <Tab activeTab={activeTab} handleFiltering={handleFiltering} />
        </div>
      </div>
      {courses.map((course: any) => {
        return (
          <div className="course" key={course.id}>
            <img src={course.image} alt="" />
            <div>
              <h3>{course.title}</h3>
              <p>by: {course.authorId}</p>
            </div>
            <h3>time: {course.duration} min</h3>
            <h4>rating: {course.rating}</h4>
            <button>View course</button>
          </div>
        );
      })}
    </div>
  );
}
