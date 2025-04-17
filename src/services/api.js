import axios from 'axios';

const API_URL = 'https://portfolio-backend-thh2.onrender.com';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchSkills = async () => {
  try {
    const response = await api.get('/skills/list');
    return response.data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
};

export const fetchProjects = async () => {
  try {
    const response = await api.get('/projects/list');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const fetchExperiences = async () => {
  try {
    const response = await api.get('/experience/list');
    return response.data;
  } catch (error) {
    console.error('Error fetching experiences:', error);
    throw error;
  }
};

export const fetchPortfolioInfo = async () => {
  try {
    const response = await api.get('/portfolio-info');
    return response.data;
  } catch (error) {
    console.error('Error fetching portfolio info:', error);
    throw error;
  }
};

export default api;

