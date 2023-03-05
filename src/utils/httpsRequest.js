import axios from 'axios';

const httpsRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (patch, option = {}) => {
    const response = await httpsRequest.get(patch, option);
    return response.data;
};

export default httpsRequest;
