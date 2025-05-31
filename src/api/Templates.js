import axios from '../utils/axiosInstance';

// Fetches the templates belonging to the current user
export const getUserTemplates = async () => {
    // Send a GET request to the user templates endpoint
    const res = await axios.get('/templates/user');
    // Return the response data (list of templates)
    return res.data;
};

// Sends a request to clone a template with the provided data
export const cloneTemplate = async (data) => {
    // Send a POST request to the clone endpoint with the template data
    const res = await axios.post('/templates/clone', data);
    // Return the response data (newly cloned template)
    return res.data;
};