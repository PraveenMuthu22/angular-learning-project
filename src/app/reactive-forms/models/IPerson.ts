export interface IPerson {
  id?: string;
  name: {
    firstName: string;
    lastName: string;
  };
  dob: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}
