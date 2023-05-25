import React, { useState, useEffect } from "react";
import Course from "./Courses"; // Update the component import to use PascalCase
import { toast } from "react-toastify";

const AllCourses = () => {
  useEffect(() => {
    document.title = "All Courses ";
  });

  // Dummy data for testing
  const dummyCourses = [
    { id: 1, title: "Course 1" },
    { id: 2, title: "Course 2" },
    { id: 3, title: "Course 3" },
  ];

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulate API call to get courses
    getAllCoursesFromServer();
  }, []);

  const getAllCoursesFromServer = () => {
    // Simulating API call delay
    setTimeout(() => {
      setCourses(dummyCourses);
    }, 1000);
  };

  const updateCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
    toast.success("Course updated successfully");
  };

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of courses as follows:</p>
      {courses.length > 0 ? (
        courses.map((item) => (
          <Course key={item.id} course={item} updateCourse={updateCourse} />
        ))
      ) : (
        <p>No Courses</p>
      )}
    </div>
  );
};

export default AllCourses;
