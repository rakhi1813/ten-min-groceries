import API from './api';

export const loginUser = async (email, password) => {
  const response = await API.post('/auth/login', { email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};
