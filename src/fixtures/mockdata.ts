import {
  generateRandomAddress,
  generateRandomPhoneNumber,
  getRandomAlphaNumeric,
} from '../support/utils';

export const newUser = () => ({
  firstName: getRandomAlphaNumeric(6),
  lastName: getRandomAlphaNumeric(6),
  address: generateRandomAddress(),
  city: 'New York',
  state: 'New York',
  zipCode: '110011',
  phone: `${generateRandomPhoneNumber(9)}`,
  ssn: `${generateRandomPhoneNumber(9)}`,
  userName: process.env.USER_NAME!,
  password: process.env.PASSWORD!,
});
