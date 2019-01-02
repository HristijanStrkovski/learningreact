import axios from 'axios';

export const getUsers = () => {
    axios.get('/users', {
        params: {
            limit: 1000
        }
    })
}