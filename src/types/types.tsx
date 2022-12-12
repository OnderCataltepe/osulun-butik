// Navigation data types

export interface SubNavType {
  id: number;
  title: string;
  path: string;
  img: string;
  category: string[];
}

export interface NavType {
  id: number;
  expand: boolean;
  title: string;
  path: string;
  category: string[];
  bgImg: string;
  subTitles: SubNavType[];
}

// Product Types

export interface ProductType {
  name: string;
  description: string;
  category: string[];
  price: number;
  amount: number;
  images: string[];
  id: string;
}

export interface BasketType {
  name: string;
  id: string;
  amount: number;
  price: number;
  image: string;
}

// User Type
export interface UserType {
  uid: string;
  name: string;
  surname: string;
  role: string;
  email: string;
  basket: BasketType[];
}
