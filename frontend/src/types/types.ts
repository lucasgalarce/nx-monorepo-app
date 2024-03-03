export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Transaction {
  id: string;
  user: User;
}

export interface Listing {
  id: string;
  title: string;
  description?: string;
  price: number;
  transactions: Transaction[];
}
