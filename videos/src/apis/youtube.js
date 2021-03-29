import axios from 'axios';

const KEY = 'AIzaSyBddng2WeUh0Z6l7TxBAjkgbYfn50XUHvM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
