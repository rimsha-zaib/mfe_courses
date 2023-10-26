import React, { useEffect, useState } from 'react';
import { Container } from '@edx/paragon';

const ShowCourses = () => {
  const [courses, setCourses] = useState([]);
  const fetchData = () => {
    fetch('api/cookiecutter_courses/v1/list/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setCourses(data))
      .catch((error) => {
        console.log('Error fetching data:', error);
        // Handle the error (e.g., set an error state or display an error message)
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log('data', courses);

  return (
    <Container>
      <h1>Example courses</h1>
      <p>Welcome to Edx courses!</p>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default ShowCourses;
