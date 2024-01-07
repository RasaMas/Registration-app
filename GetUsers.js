import axios from 'axios';

const getUsers = async () => {
    try {
        const response = await axios.get('/api/users');
        console.log(response.data);
    } catch (error) {
        console.eroor(error);
    }
};