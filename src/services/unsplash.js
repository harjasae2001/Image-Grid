// Step 3: Create a new file for the Unsplash API service (src/services/unsplash.js)
import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.G7N_3YJdSK7efWIG1-hy4bV9chwWxDlugPRdNl504Eo}`,
  },
});

export const fetchImages = async () => {
  const response = await unsplash.get('/photos/random?count=30');
  return response.data;
};