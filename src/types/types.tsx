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

export interface ProductType {
  name: string;
  description: string;
  category: string[];
  price: number;
  amount: number;
  images: string[];
  id: string;
}
