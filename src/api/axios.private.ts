import axios from 'axios';
import { getToken } from '../utils/tokenStorage';

export const axiosPrivate = axios.create({
  baseURL: 'https://dev.api.bekindnetwork.com/api'
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

// Agregar el token antes de cada request
axiosPrivate.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;

  }

  return config;
});

/*
a.berrio@yopmail.com
AmuFK8G4Bh64Q1uX+IxQhw==
*/ 