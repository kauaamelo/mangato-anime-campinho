import axios from 'axios';

const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMzOTgyNTM4LCJleHAiOjE3MzY1NzQ1Mzh9.gyqdwZmIUSfUDkjzv4gJJxYgOSIX51IThe8Ne96JX-s';
const BASE_URL = 'https://ecom-back-strapi.onrender.com/api';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': TOKEN
    },
});

export const fetchData = async (endpoint) => {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar dados de ${endpoint}:`, error);
      throw error;
    }
  };

export const buscarAnimeDetalhes = async (id) => {
    try {
        const response = await api.get(`/animes/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar detalhes do anime com id ${id}:`, error);
        throw error;
    }
};