import React, { useEffect, useState } from 'react';
import { Container } from '@edx/paragon';
import getRequest from './request';

const ShowCourses = () => {

  const [courses, setCourses] = useState([]);
  const url = 'http://local.overhang.io:8000/api/cookiecutter_courses/v1/list/';
  async function handleSearch() {
    const response = await getRequest(url);
    console.log("response", response);
    setCourses(response);
  }

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <Container>
      <h1>courses</h1>
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
