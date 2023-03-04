import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api',
});

export const get = async (patch, option = {}) => {
    const response = await request.get(patch, option);
    return response.data;
};

export default request;
