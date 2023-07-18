import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL_BASE,
});



export const getMoviesList = async (path, query) => {
  const url = path=='search'
    ? `/${path}/movie?query=${query}&api_key=${API_KEY}`
    : `/${path}/movie/day?api_key=${API_KEY}`;
  const response = await apiInstance
    .get(url)
    .then((res) => res.data)
    .then((data) => data.results)
    .catch((err) => err);
  return response;
};

export const getDetailMovie = async (id, path) => {
  const url = path
    ? `/movie/${id}/${path}?api_key=${API_KEY}`
    : `/movie/${id}?api_key=${API_KEY}`;
  const response = await apiInstance
    .get(url)
    .then((res) => res.data)
    .catch((err) => err);
  return response;
};



