
import React, { useEffect, useState } from "react";

import { Container, Spinner } from "@edx/paragon";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import useHttp from "../../hooks/use-https";

const ShowCourses = () => {
  const [courses, setCourses] = useState([]);
  const { sendRequest, isLoading, error } = useHttp();

  useEffect(() => {
    sendRequest({ url: "api/cookiecutter_courses/v1/list/" }, (data) => {
      setCourses(data.results);
    });
  }, [sendRequest]);

  return (
    <main>
      <Container className="py-5">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {isLoading ? (
            <Grid item xs={2} sm={4} md={4}>
              <Spinner
                animation="border"
                variant="info"
                className="mr-3"
                screenReaderText="loading"
              />
            </Grid>
          ) : error ? (
            <Grid item xs={2} sm={4} md={4}>
              <h2>{error}</h2>
            </Grid>
          ) : (
            courses?.map((item) => (
              <Grid item xs={2} sm={4} md={4} key={item.id}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={item.media.image.raw}
                    title={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </main>
  );
};

export default ShowCourses;
// import { Container } from '@edx/paragon';

// export default function ShowCourses() {
//   fetch("http://apps.local.overhang.io:8000/api/cookiecutter_courses/v1/list/", { mode: "no-cors" })
//     .then(response => {
//       if (response.ok) {
//         return response.json(); // Parse the response as JSON
//       }
//       throw new Error(`Request failed with status: ${response.status}`);
//     })
//     .then(data => {
//       console.log("Response data:", data); // Log the parsed response data
//     })
//     .catch(error => {
//       console.log("Error:", error)
//       console.error("Error:", error);
//     });

//   return (
//     <Container className="py-5">
//       <h1>Example courses</h1>
//       <p>Welcome !</p>
//     </Container>
//   )
// }




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


  

  

      