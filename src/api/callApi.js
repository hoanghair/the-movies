// api.js
import axios from "axios";

const API_KEY = "a44cced0c76f16a355dbd9e71afd5ed6";
const BASE_URL = "https://api.themoviedb.org/3";

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export const getMovie = async (id) => {
  const response = await axiosClient.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCast = async (id) => {
  const response = await axiosClient.get(
    `/movie/${id}/casts?api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const getSimilarMovies = async (id) => {
  const response = await axiosClient.get(
    `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

export const getMovieKeywords = async (id) => {
  const response = await axiosClient.get(
    `/movie/${id}/keywords?api_key=${API_KEY}`
  );
  return response.data.keywords;
};

export const getMovieTrailer = async (id) => {
  const response = await axiosClient.get(
    `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};

export const getMovieTrendingDay = async () => {
  const response = await axiosClient.get(
    `/trending/all/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const getMovieTrendingWeek = async () => {
  const response = await axiosClient.get(
    `/trending/all/week?api_key=${API_KEY}`
  );
  return response.data.results;
};
export const getMoviePopularTV = async () => {
  const response = await axiosClient.get(
    `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
export const getMoviePopularTheater = async () => {
  const response = await axiosClient.get(
    `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
export const getPersonMovie = async (id) => {
  const response = await axiosClient.get(
    `/person/${id}?api_key=${API_KEY}&language=en-US&append_to_response=movie_credits`
  );
  return response.data;
};
