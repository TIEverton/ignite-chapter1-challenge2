import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://json-server-challenge1.herokuapp.com',
  
  // baseURL: 'http://localhost:3333',
});
