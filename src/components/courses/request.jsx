import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

const getCourses = () => {
  const client = getAuthenticatedHttpClient();
  return client.get(`${getConfig().LMS_BASE_URL}/api/cookiecutter_courses/v1/list/`)
    .then(res => res.data)
    .catch(err => ({ error: (err && err.response && err.response.data) || 'Network Error' }));
};

// eslint-disable-next-line import/prefer-default-export
export default getCourses;