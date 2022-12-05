import { ProductData } from '../redux/reducers/productSlice';

export const sortProduct = (data: ProductData[], sorting: string) => {
  switch (sorting) {
    case 'new':
      return data;
    case 'az':
      return data.sort((a, b) => a.name.localeCompare(b.name));
    case 'za':
      return data.sort((a, b) => b.name.localeCompare(a.name));
    case '09':
      return data.sort((a, b) => a.price - b.price);
    case '90':
      return data.sort((a, b) => b.price - a.price);
  }
};
