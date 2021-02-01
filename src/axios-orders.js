import axios from 'axios';
import configData from './config.json';

const instance = axios.create({
    baseURL: configData.SERVER_URL
});

export default instance;