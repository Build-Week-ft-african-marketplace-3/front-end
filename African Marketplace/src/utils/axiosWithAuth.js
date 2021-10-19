import axios from 'axios';

const axiosWithAuth = ()=> {
    // get token from cookies
    const token = localStorage.getItem('token');

    // axios.()
    return axios.create({
        baseURL: 'https://african-marketplace-03.herokuapp.com/',
        headers: {
            authorization: token
        }
    });
    
}

export default axiosWithAuth;