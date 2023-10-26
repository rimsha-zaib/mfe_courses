// import React, { useEffect, useState } from 'react';
// import { Container } from '@edx/paragon';
// const ShowCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const fetchData = () => {
//     fetch('http://local.overhang.io:8000/api/cookiecutter_courses/v1/list/')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Network response was not ok (status ${response.status})`);
//         }
//         return response.json();
//       })
//       .then((data) => setCourses(data))
//       .catch((error) => {
//         console.log('Error fetching data:', error);
//       });
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   console.log('data', courses);
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

import { Container } from "@edx/paragon";
import fetchCoursesApi from "./request";

const ShowCourses = () => {
  const courses = fetchCoursesApi();
  console.log("data",courses)
  return (
    <Container>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ShowCourses;