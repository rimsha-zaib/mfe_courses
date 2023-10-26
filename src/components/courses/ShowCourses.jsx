import { Container } from '@edx/paragon';
import React, { useEffect, useState } from 'react'; 

import React from 'react'

export default function ShowCourses() {
    const response = fetch("http://apps.local.overhang.io:8000/api/cookiecutter_courses/v1/list/")
    console.log("response",response,response.data)
  
  return (
    <Container className="py-5">
      <h1>Example courses</h1>
      <p>Hello jee!</p>
    </Container>
  )
}



// const ShowCourses = () => (
//     const [transformCourse, setTransformCourse] = useState([]);
//     useEffect(() => {
//         async function fetchCourse() {
//           try {
//             const response = await fetch("http://127.0.0.1:8000/CoirseView/", {
//               headers: headers
//             });
//             if (!response.ok) {
//               if (response.status === 401) {
//                 console.log("401")
//                 return;
//               }
//               throw new Error('Error fetching data');
//             }
//             const data = await response.json();
//             if (data === null) {
//               console.error('Fetched data is null');
//               return;
//             }
//             const transformCourse = Object.keys(data).map((courseid) => ({
//               id: courseid,
//               ...data[courseid]
//             }));
//             console.log(transformCourse)
//           } catch (error) {
//             console.error(error);
//           }
//         }
//         fetchCourse();
//       }, []),
//        const coursesList = course.map((Course) => (
//       <CourseCard 
//         key={Course.id}
//         id={Course.id}
//         title={Course.title}
//         description={Course.description}
//         teacher_name={Course.teacher_name}
//         duration={Course.duration}
//         course_img={Course.course_img}
//         button = "enroll"
//       />
//     ));
//        return (
//         <section className={classes.card_container}>
//           {!isLoading ? coursesList : <p>Loading Courses...</p>}
//         </section>
//       );
// );
// export default ShowCourses;


  

  

      