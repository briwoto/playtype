import { generateRandomEmail, getRandomAlphaNumeric } from '../support/utils';

export type NewUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type Contact = {
  firstName: string;
  lastName: string;
  birthdate?: string;
  email?: string;
  phone?: number;
  street1?: string;
  street2?: string;
  city?: string;
  stateProvince?: string;
  postalCode?: string;
  country?: string;
};

export const newUser = (): NewUser => ({
  firstName: getRandomAlphaNumeric(6),
  lastName: getRandomAlphaNumeric(6),
  email: generateRandomEmail(),
  password: getRandomAlphaNumeric(5),
});

export const newContact = (args?: Contact): Contact => ({
  firstName: args?.firstName || getRandomAlphaNumeric(6),
  lastName: args?.lastName || getRandomAlphaNumeric(6),
  birthdate: args?.birthdate,
  email: args?.email,
  phone: args?.phone,
  street1: args?.street1,
  street2: args?.street2,
  city: args?.city,
  stateProvince: args?.stateProvince,
  postalCode: args?.postalCode,
  country: args?.country,
});
