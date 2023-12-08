import { Contact, User } from '.';
import * as utils from '../support/utils';

export const newUser = (): User => ({
  firstName: utils.getRandomAlphaNumeric(6),
  lastName: utils.getRandomAlphaNumeric(6),
  email: utils.generateRandomEmail(),
  password: utils.getRandomAlphaNumeric(5),
});

export const newContact = (args?: Contact): Contact => ({
  firstName: args?.firstName || utils.getRandomAlphaNumeric(6),
  lastName: args?.lastName || utils.getRandomAlphaNumeric(6),
  birthdate: args?.birthdate || utils.generateRandomDob(),
  email: args?.email || utils.generateRandomEmail(),
  phone: args?.phone || utils.generateRandomPhoneNumber(),
  street1: args?.street1 || utils.generateRandomAddress(),
  street2: args?.street2,
  city: args?.city || 'Berlin',
  stateProvince: args?.stateProvince || 'Berlin',
  postalCode: args?.postalCode || '10367',
  country: args?.country || 'Germany',
});
