import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = (setListings) => {
    axiosWithAuth()
        .get('https://african-marketplace-03.herokuapp.com/api/listings')
        .then ( response => {
            console.log(response);
            setListings(response.data);
        })
        .catch( error => {
            console.log('Get Error: ', error);
        })
    
}

export default articleService;

