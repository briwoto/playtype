import axios, { AxiosRequestConfig } from 'axios';
import { Contact, newContact, newUser } from './mockdata';

const defaultOptions = (): AxiosRequestConfig => ({
  baseURL: process.env.BASEURL_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  },
});

export const api = {
  createUser: async () =>
    axios({
      ...defaultOptions(),
      method: 'POST',
      url: '/users',
      data: newUser(),
    }),
  contacts: async () =>
    axios({
      ...defaultOptions(),
      method: 'GET',
      url: '/contacts',
      data: newUser(),
    }),
  addContact: async (contactDetails?: Contact) =>
    axios({
      ...defaultOptions(),
      method: 'POST',
      url: '/contacts',
      data: contactDetails || newContact(),
    }),
};
