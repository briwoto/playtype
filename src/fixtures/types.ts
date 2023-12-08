export type User = {
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
