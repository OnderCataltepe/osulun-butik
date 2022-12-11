import { ProductData } from '../redux/reducers/productSlice';
import { useAppSelector } from '../redux/hooks/reduxHooks';
import type { BasketType } from '../types/types';
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

// update products which are in basket

export const updateBasket = (arr: BasketType[], item: BasketType, products: ProductData[]) => {
  const maxAmount = products.find((element) => element.id === item.id)?.amount;

  const newArray = [...arr];
  const index = arr.findIndex((element) => element.id === item.id);
  if (index > -1) {
    newArray[index] = {
      ...item,
      amount: maxAmount
        ? Math.min(item.amount + newArray[index].amount, maxAmount)
        : item.amount + newArray[index].amount
    };
  } else {
    newArray.push(item);
  }
  return newArray.filter((item) => item.amount > 0);
};

/**
 export const updateBasket = (arr: BasketType[], item: BasketType) => {
  const newArray = [...arr];
  const index = arr.findIndex((element) => element.id === item.id);
  if (index > -1) {
    newArray[index] = { ...item, amount: item.amount + newArray[index].amount };
  } else {
    newArray.push(item);
  }
  return newArray.filter((item) => item.amount > 0);
};
 */
