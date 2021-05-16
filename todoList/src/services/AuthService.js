import { AsyncStorage } from 'react-native';
import api from './api';

export const getStorageToken = async () => {
  return await AsyncStorage.getItem('token')
}

export const setStorageToken = async (token) => {
  return await AsyncStorage.setItem('token', token)
}

export const postSignIn = async ({email, password}) => {
  const response = await api.post('/auth/register', {email, password});
  return response.data
}