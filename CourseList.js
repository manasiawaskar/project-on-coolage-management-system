// CourseList.js

import React from 'react'; // Import the CSS file for styling

const CourseList = () => {
  const courses = [
    { id: 1, name: 'Computer Science' },
    { id: 2, name: 'Biology' },
    { id: 3, name: 'I T' },
    { id: 4, name: 'Mathamatics' },
    { id: 5, name: 'Phycics' },
    // Add more courses here...
  ];

  return (
    <div className="course-list-container">
      <h1 className="course-list-title">Course List</h1>
      <ul className="course-list">
        {courses.map(course => (
          <li key={course.id} className="course-item">
            {course.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
