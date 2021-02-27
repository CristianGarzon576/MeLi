import axios from 'axios';
import { env } from '../environments/env';

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