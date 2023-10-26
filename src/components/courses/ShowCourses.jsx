import {
  Container, CardGrid, Spinner, Card, Button, useMediaQuery, breakpoints,
} from '@edx/paragon';
import { useState, useEffect } from 'react';
import { getConfig } from '@edx/frontend-platform';
// import getCourses from './request';

const CoursesList = () => {
  const [loading, setLoading] = useState('idle');
  const [coursesList, setCoursesList] = useState({ results: [] });
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });
  const lmsUrl = getConfig().LMS_BASE_URL;
  console/log("lmsurl",lmsUrl);

  // useEffect(() => {
  //   (async () => {
  //     setLoading('pending');
  //     const coursesData = await getCourses();
  //     if (coursesData.error) {
  //       console.log(coursesData.error);
  //       setLoading('error');
  //     } else {
  //       setCoursesList(coursesData);
  //       setLoading('success');
  //     }
  //   })();
  // }, []);

  return (
    <main>
      <Container className="py-5 px-5">
        <h1>Edx Course Catalog</h1>
      </Container>
    </main>
  );
};

export default CoursesList;


// import React, { useEffect, useState } from 'react';
// import { Container } from '@edx/paragon';
// import getRequest from './request';

// const ShowCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const url = 'http://local.overhang.io:8000/api/cookiecutter_courses/v1/list/';
//   async function handleSearch() {
//     const response = await getRequest(url);
//     console.log("response", response);
//     if (Array.isArray(response)) {
//       setCourses(response);
//     } else {
//       console.log("error");
//       // Handle invalid or unexpected responses here
//     }
//   }

//   useEffect(() => {
//     handleSearch();
//   }, []);
//   return (
//     <Container>
//       <h1>courses</h1>
//       <p>Welcome to Edx courses!</p>
//       <ul>
//         {courses.map((course) => (
//           <li key={course.id}>{course.name}</li>
//         ))}
//       </ul>
//     </Container>
//   );
// };

// export default ShowCourses;
