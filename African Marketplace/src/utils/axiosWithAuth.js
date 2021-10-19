import axios from 'axios';

const axiosWithAuth = ()=> {
    // get token from cookies
    const token = localStorage.getItem('token');

    // axios.()
    return axios.create({
        headers: {
            authorization: token
        }
    });
    
}

export default axiosWithAuth;