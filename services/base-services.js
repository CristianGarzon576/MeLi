import axios from 'axios';

export const get = async (url) => {
  return await axios.get(url)
    .then(response => handleResponseSuccess(response.data))
    .catch(error => handleResponseError(error));
};

const handleResponseSuccess = (response) => {
  return {...response};
};

const handleResponseError = (error) => {
  return error
}

export default {get};