import axios from 'axios';

const getRequest = (url) => {
  return axios.get(url).then(
    (resp) => {
      return resp.data;
    },
    (err) => {
      throw err;
    }
  );
};

export default getRequest;