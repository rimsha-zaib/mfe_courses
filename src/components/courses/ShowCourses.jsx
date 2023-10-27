// import React, { useEffect, useState } from 'react';
// import { Container } from '@edx/paragon';
// import fetchCoursesApi from './data/fetchCourses';
// const ShowCourses = () => {
//   const courses = fetchCoursesApi();
//   return (
//     <Container>
//       <h1>edX courses</h1>
//       <p>Welcome to Edx courses!</p>
//       <ul>
//       {courses.map((course) => (
//           <li key={course.id}>
//             <strong>{course.name}</strong>
//             <p>Course ID: {course.course_id}</p>
//             <p>Start Date: {course.start_display}</p>
//             <p>Organization: {course.org}</p>
//             {course.media && course.media.image && (
//               <img src={course.media.image.raw} alt={course.name} />
//             )}
//           </li>
//         ))}
//       </ul>
//     </Container>
//   );
// };
// export default ShowCourses;

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '@edx/paragon';
import fetchCoursesApi from './data/fetchCourses';
import CourseCard from './CourseCard';

const ShowCourses = () => {
  const courses = fetchCoursesApi();

  return (
    <Container>
      <h1>edX courses</h1>
      <p>Welcome to Edx courses!</p>
      <Row>
        {courses.map((course) => (
          <Col key={course.id} sm={12} md={6} lg={4}>
            <CourseCard course={course} /> {/* Render each course as a card */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShowCourses;
