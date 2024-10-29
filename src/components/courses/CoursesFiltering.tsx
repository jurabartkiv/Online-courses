import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Courses.css";
import { coursesType } from "./types";

export default function CoursesFiltering() {
  const [courses, setCourses] = useState<coursesType[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<coursesType[]>([]);
  const [activeTab, setActiveTab] = useState("All courses");

  //fetching test data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(
          "https://r6sq9uysoh.execute-api.us-west-2.amazonaws.com/prod/courses"
        );
        setCourses(data);
        setFilteredCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //function for filtering courses
  const handleFiltering = (e: any, tab: string) => {
    setActiveTab(tab);
    if (e.target.textContent === "The Newest") {
      const filteredCourses = courses.filter((course) =>
        course.tags.includes("newest")
      );
      setFilteredCourses(filteredCourses);
    } else if (e.target.textContent === "Top Rated") {
      const filteredCourses = courses.filter((course) =>
        course.tags.includes("top-rated")
      );
      setFilteredCourses(filteredCourses);
    } else if (e.target.textContent === "Most Popular") {
      const filteredCourses = courses.filter((course) =>
        course.tags.includes("popular")
      );
      setFilteredCourses(filteredCourses);
    } else {
      setFilteredCourses(courses);
    }
  };

  //rendering courses cards for filtering
  return (
    <div className="courses">
      <div className="filtering">
        <h1>Courses</h1>
        <div className="allFilters">
          <h2
            className={`filter ${activeTab === "All courses" ? "active" : ""}`}
            onClick={(e) => handleFiltering(e, "All courses")}
          >
            All courses
          </h2>
          <h2
            className={`filter ${activeTab === "The Newest" ? "active" : ""}`}
            onClick={(e) => handleFiltering(e, "The Newest")}
          >
            The Newest
          </h2>
          <h2
            className={`filter ${activeTab === "Top Rated" ? "active" : ""}`}
            onClick={(e) => handleFiltering(e, "Top Rated")}
          >
            Top Rated
          </h2>
          <h2
            className={`filter ${activeTab === "Most Popular" ? "active" : ""}`}
            onClick={(e) => handleFiltering(e, "Most Popular")}
          >
            Most Popular
          </h2>
        </div>
      </div>
      {filteredCourses.map((course) => {
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
