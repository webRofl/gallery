import axios from 'axios';

export const getPhotosPromise = (albumId) =>
  axios
    .get(
      'https://jsonplaceholder.typicode.com/photos?_limit=6&albumId=' + albumId
    )
    .then((res) => res.data);
