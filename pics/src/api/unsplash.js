import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f8rDVNoi_qI3fDE36GO3qfzP-ouwG1WkMf1YqK3HAJo',
  },
});
