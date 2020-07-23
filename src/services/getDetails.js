export default function getDetails({ id }) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=56ee74fd8cde9ed20ae0f8f19ae002ac`
  ).then(res => res.json());
}
