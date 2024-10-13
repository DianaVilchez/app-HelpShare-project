export type dataLogin = {
    email: string;
    password: string;
    description: string;
};

export type dataRegister = {
  username: string;
  email: string;
  password: string;
};

export interface OfferData {
  title: string;
  description: string;
  category: string;
}
