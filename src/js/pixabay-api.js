import axios from 'axios';

export async function getPhotos(inputValue, currentPage) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = {
    key: '42985160-4d9b5f931f1b68b881db47de1',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  };
  const url = `${BASE_URL}${END_POINT}`;
  const res = await axios.get(url, { params });
  return res.data;
}
