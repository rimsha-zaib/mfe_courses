import React, { useEffect, useState } from 'react';
import { Container } from '@edx/paragon';
import fetchCoursesApi from './data/fetchCourses';
const ShowCourses = () => {
  const courses = fetchCoursesApi();
  return (
    <Container>
      <h1>courses</h1>
      <p>Welcome to Edx courses!</p>
      <ul>
      {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong>
            <p>Course ID: {course.course_id}</p>
            <p>Start Date: {course.start_display}</p>
            <p>Organization: {course.org}</p>
            {course.media && course.media.image && (
              <img src={course.media.image.raw} alt={course.name} />
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default ShowCourses;