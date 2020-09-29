import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://blog-b502a.firebaseio.com/'
});

export default instance;