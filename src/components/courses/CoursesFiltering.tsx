import React, { useEffect, useState } from "react";
import "./Courses.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { filter } from "./redux/coursesSlice";
import Tab from "./Tab";
import Button from "../UI/Button";

export default function CoursesFiltering() {
  const dispatch: AppDispatch = useDispatch();
  const courses = useSelector((state: any) => state.courses.filteredCourses);

  const activeTab = useSelector((state: any) => state.courses.filterByTag);

  const handleFiltering = (e: any, keyValue: any) => {
    dispatch(filter({ title: e.target.textContent, value: keyValue }));
  };
  const navigateToCourse = (courseId: string) => {
    // navigate to a course detail page, replace with your route
    console.log(`Navigate to course with ID: ${courseId}`);
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
            <Button
              text="View course"
              onClick={() => navigateToCourse(course.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
