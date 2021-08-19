import axios from 'axios';

const ts = 1;
const hash = '7b2e9681921f265adbd91d52495e5f2d';
const apikey = '50c711a6c37321436f7c359e3abc4760';
const limit = 10;
const baseURL = 'https://gateway.marvel.com/v1/public/';

export default axios.create({
  baseURL,
  params: { apikey, hash, ts, limit },
});
