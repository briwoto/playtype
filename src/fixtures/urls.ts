const URL = (url = '') => `${baseUrl}${url}`;

export const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';

export const urls = {
  login: URL(),
  homePage: URL(),
  addUser: URL('/addUser'),
  contactList: URL('/contactList'),
  addContact: URL('/addContact'),
};
