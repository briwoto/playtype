import axios, { AxiosRequestConfig } from 'axios';
import { Contact, User } from '.';

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
  createUser: async (user: User) =>
    axios({
      ...defaultOptions(),
      method: 'POST',
      url: '/users',
      data: user,
    }),
  deleteUser: async () =>
    axios({
      ...defaultOptions(),
      method: 'DELETE',
      url: '/users/me',
    }),
  getContacts: async () =>
    axios({
      ...defaultOptions(),
      method: 'GET',
      url: '/contacts',
    }),
  addContact: async (contactDetails: Contact) =>
    axios({
      ...defaultOptions(),
      method: 'POST',
      url: '/contacts',
      data: contactDetails,
    }),
};
