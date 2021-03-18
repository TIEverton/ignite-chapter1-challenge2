import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://json-server-challenge1.herokuapp.com',
  
  // 'http://localhost:3333',
});
