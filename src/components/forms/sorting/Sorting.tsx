import { sortProduct } from '../../../utils';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState, useEffect } from 'react';
import { ProductData } from '../../../redux/reducers/productSlice';

interface SProps {
  products: ProductData[];
  setProducts: (value: ProductData[]) => void;
}
const Sorting = ({ products, setProducts }: SProps): JSX.Element => {
  const [sorted, setSorted] = useState<string>('new');
  const handleChange = (event: SelectChangeEvent) => {
    setSorted(event.target.value);
  };
  useEffect(() => {
    const copyProducts = [...products];
    const sortedProducts = sortProduct(copyProducts, sorted);
    if (sortedProducts) {
      setProducts(sortedProducts);
    }
  }, [sorted]);
  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small">Sırala</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={sorted}
        label="Sırala"
        onChange={handleChange}>
        <MenuItem value="new">Yeniden Eskiye</MenuItem>
        <MenuItem value="09">Fiyata Göre Artan</MenuItem>
        <MenuItem value="90">Fiyata Göre Azalan</MenuItem>
        <MenuItem value="az">Alfabetik (A-Z)</MenuItem>
        <MenuItem value="za">Alfabetik (Z-A)</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sorting;
