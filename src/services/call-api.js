import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL_BASE,
});


export const getTrendingMovies = async () => {
  const response = await apiInstance
    .get(`/trending/movie/day?api_key=${API_KEY}`)
    .then((res) => res.data)
    .then((data) => data.results)
    .catch((err) => err);
  return response;
};

export const getDetailMovie = async (id) => {
  const response = await apiInstance
    .get(`/movie/${id}?api_key=${API_KEY}`)
    .then((res) => res.data)
    .catch((err) => err);
  return response;
};




