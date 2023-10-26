import { Container } from "@edx/paragon";
import fetchCoursesApi from "./request";

const ShowCourses = async () => { 
  const courses = await fetchCoursesApi();
  console.log("data",courses)
  return (
    <Container>
       <h1>courses</h1>
       <p>Welcome to Edx courses!</p>
    </Container>
  );
};

export default ShowCourses;