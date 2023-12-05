import axios from 'axios';

const defaultOptions = {
  baseUrl: process.env.BASEURL_API,
  withCredentials: true,
};
const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const api = {
  accounts: async (args: any) =>
    axios({
      url: `/customers/${args.customerId}/accounts`,
      ...defaultOptions,
      ...defaultHeaders,
    }),
};
