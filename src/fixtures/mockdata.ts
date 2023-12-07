import { generateRandomEmail, getRandomAlphaNumeric } from '../support/utils';

export type NewUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const newUser = (): NewUser => ({
  firstName: getRandomAlphaNumeric(6),
  lastName: getRandomAlphaNumeric(6),
  email: generateRandomEmail(),
  password: getRandomAlphaNumeric(5),
});
