const URL = (url = '') => `${baseUrl}${url}`;
const URL_API = (url = '') => `${process.env.BASEURL_API}${url}`;

export const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';

export const urls = {
  login: URL(),
  homePage: URL(),
  addUser: URL('/addUser'),
  contactList: URL('/contactList'),
  addContact: URL('/addContact'),
  endpoints: {
    contacts: URL_API('/contacts'),
    users: URL_API('/users'),
  },
};
