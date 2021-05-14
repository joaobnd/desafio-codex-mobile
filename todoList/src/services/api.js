import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafio-codex-backend2.herokuapp.com/',
});

export async function createUser(user) {
  await api.post('/auth/register', user);
}
