export const getData = query => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = '?api_key=56ee74fd8cde9ed20ae0f8f19ae002ac';

  const url =
    'https://api.themoviedb.org/3/movie/550?api_key=56ee74fd8cde9ed20ae0f8f19ae002ac';
  const url2 =
    'https://api.themoviedb.org/3/search/movie?api_key=56ee74fd8cde9ed20ae0f8f19ae002ac&query=';
  return fetch(url + query)
    .then(res => res.json())
    .catch([]);
};
