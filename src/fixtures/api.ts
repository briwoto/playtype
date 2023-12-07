import axios from 'axios';
import { newUser } from './mockdata';

const defaultOptions = {
  baseUrl: process.env.BASEURL_API,
  withCredentials: true,
};
const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const api = {
  createUser: async () =>
    axios({
      ...defaultOptions,
      headers: { ...defaultHeaders },
      method: 'POST',
      url: '/users',
      data: newUser(),
    }),
  contacts: async (args: any) =>
    axios({
      ...defaultOptions,
      headers: { ...defaultHeaders },
      method: 'GET',
      url: '/contacts',
      data: newUser(),
    }),
};
