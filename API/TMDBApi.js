// API/TMDBApi.js

const API_TOKEN = "ca99c1c177929352045ffb734bd2232c";

export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailFromApi(id){
  const url = 'https://api.themoviedb.org/3/movie/'+ id + '?api_key=' + API_TOKEN + '&languange=fr'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
