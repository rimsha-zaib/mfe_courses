import {
  Container, CardGrid, Card, Button
} from '@edx/paragon';
import fetchCoursesApi from './data/fetchCourses';
const ShowCourses = () => {
  const courses = fetchCoursesApi();
  return (
    <main>
      <Container className="py-5 px-5">
        <h1>Edx Course Catalog</h1>
        <Container className="pt-5">
          <CardGrid
            columnSizes={{
              xs: 12,
              lg: 6,
              xl: 4,
            }}
          >
            {courses.map((course) => (
              <Card className="edx-course-catalog" key={course.name}>
                <Card.ImageCap
                  src={course.media.image.raw}
                  alt={course.name}
                />
                <Card.Header title={course.name} subtitle={course.number} />
                <Card.Body className="px-3.5">By {course.org}</Card.Body>
                <Card.Section>
                  Starts on {course.start_display}
                  <div>{course.pacing[0].toUpperCase() + course.pacing.substring(1)}-paced course{course.effort && `, Requires ${course.effort} min to complete`}</div>
                </Card.Section>
              </Card>
            ))}
          </CardGrid>
        </Container>
      </Container>
    </main>
  );
};




// return (
//   <main>
//     <Container className="py-5 px-5">
//       <h1>Edx Course Catalog</h1>
//       <Container className="pt-5">
//           <CardGrid
//             columnSizes={{
//               xs: 12,
//               lg: 6,
//               xl: 4,
//             }}
//           >

//             {
//             courses.map((course) => (

//               <Card className="edx-course-catalog" key={course.name} style={{ width: isExtraSmall ? '100%' : '20rem' }} isClickable>
//                 <Card.ImageCap
//                   src={course.media.image.raw}
//                   alt={course.name}
//                 />
//                 <Card.Header title={course.name} subtitle={course.number} />
//                 <Card.Body className="px-3.5">By {course.org}</Card.Body>
//                 <Card.Section>
//                   Starts on {course.start_display}
//                   <div>{course.pacing[0].toUpperCase() + course.pacing.substring(1)}-paced course{course.effort && `, Requires ${course.effort} min to complete`}</div>
//                 </Card.Section>

//                 <Card.Footer>
//                   <Button as="a" href={`${lmsUrl}/courses/${course.course_id}/about`}>View Course</Button>
//                 </Card.Footer>
//               </Card>

//             ))
//           }
//           </CardGrid>

//       </Container>
//     </Container>
//   </main>
// );
// };







    // <Container>
    //   <h1>edX courses</h1>
    //   <p>Welcome to Edx courses!</p>
    //   <ul>
    //   {courses.map((course) => (
    //       <li key={course.id}>
    //         <strong>{course.name}</strong>
    //         <p>Course ID: {course.course_id}</p>
    //         <p>Start Date: {course.start_display}</p>
    //         <p>Organization: {course.org}</p>
    //         {course.media && course.media.image && (
    //           <img src={course.media.image.raw} alt={course.name} />
    //         )}
    //       </li>
    //     ))}
    //   </ul>
    // </Container>

export default ShowCourses;
