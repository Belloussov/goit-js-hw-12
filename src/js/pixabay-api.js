import axios from "axios";

// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api',
//   params: {
//     key: '42985160-4d9b5f931f1b68b881db47de1',
//     q: inputValue,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 15,
//   }
// });

export async function getPhotos(inputValue) {
  const baseURL = 'https://pixabay.com/api';
  const params = {
    key: '42985160-4d9b5f931f1b68b881db47de1',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  };

  const res = await axios.get(baseURL,{params} );
  return res.data;
}