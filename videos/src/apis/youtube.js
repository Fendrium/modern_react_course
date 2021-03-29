import axios from 'axios';

<<<<<<< HEAD
const KEY = 'API_KEY';
=======
const KEY = 'AIzaSyBddng2WeUh0Z6l7TxBAjkgbYfn50XUHvM';
>>>>>>> d2cfc29fd2db91f7c8de106bc9aef45ccbc2da1c

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
