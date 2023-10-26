// import { getConfig } from "@edx/frontend-platform";
// import getAuthenticatedHttpClient from "@edx/frontend-platform/auth";
// const fetchCoursesApi = ()=> {
//   try {
//     const httpClient = getAuthenticatedHttpClient();
//     const response =  httpClient.get(`${getConfig().LMS_BASE_URL}/api/cookiecutter_courses/v1/list/`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching courses:', error);
//     throw error; // Rethrow the error to handle it where you call this function.
//   }
// };

// export default fetchCoursesApi;
