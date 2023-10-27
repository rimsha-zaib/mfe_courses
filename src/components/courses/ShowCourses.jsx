import React, { useEffect, useState } from 'react';
import { Container } from '@edx/paragon';
const ShowCourses = () => {
  const [courses, setCourses] = useState([]);
  const fetchData = () => {
    fetch('http://local.overhang.io:8000/api/cookiecutter_courses/v1/list/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (status ${response.status})`);
        }
        return response.json();
      })
      .then((data) => setCourses(data.results))
      .catch((error) => {
        console.log('Error fetching data:', error);
        console.log('Error status:', error.status);
        console.log('Error response:', error.response);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log('data', courses);
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