import { Container } from "@edx/paragon";
import {fetchCoursesApi} from "./request";

const ShowCourses = () => {
  const courses = fetchCoursesApi();
  console.log("data",courses)
  return (
    <Container>
       <h1>courses</h1>
       <p>Welcome to Edx courses!</p>
    </Container>
  );
};

export default ShowCourses;