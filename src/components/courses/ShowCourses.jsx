import { Container } from "@edx/paragon";
import { getConfig } from '@edx/frontend-platform';

const ShowCourses = async () => { 
  const lmsUrl = getConfig().LMS_BASE_URL;
  console.log("lmsurl",lmsUrl);
  return (
    <Container>
       <h1>courses</h1>
       <p>Welcome to Edx courses!</p>
    </Container>
  );
};

export default ShowCourses;