export const selectors = {
  welcomePageHeader: (txt: string) => `//h1[.="Welcome ${txt}"]`,
  login: {
    username: 'input[name="username"]',
    password: 'input[name="password"]',
    loginBtn: 'div.login>input.button',
  },
  createUser: {
    firstName: 'input[name="customer.firstName"]',
    lastName: 'input[name="customer.lastName"]',
    address: 'input[name="customer.address.street"]',
    city: 'input[name="customer.address.city"]',
    state: 'input[name="customer.address.state"]',
    zipCode: 'input[name="customer.address.zipCode"]',
    phone: 'input[name="customer.phoneNumber"]',
    ssn: 'input[name="customer.ssn"]',
    userName: 'input[name="customer.username"]',
    password: 'input[name="customer.password"]',
    repeatPassword: 'input[name="repeatedPassword"]',
    registerBtn: 'input[value="Register"]',
  },
};
