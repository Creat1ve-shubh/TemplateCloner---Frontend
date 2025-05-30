import axios from '../utils/axiosInstance';

export const getUserTemplates = async () => {
    const res = await axios.get('/templates/user');
    return res.data;
};

export const cloneTemplate = async (data) => {
    const res = await axios.post('/templates/clone', data);
    return res.data;
};