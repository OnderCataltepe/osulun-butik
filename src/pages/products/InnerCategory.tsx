import ProductCard from '../../components/cards/ProductCard';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sorting from '../../components/forms/sorting/Sorting';
import Typography from '@mui/material/Typography';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/reduxHooks';
import { getProducts, ProductData } from '../../redux/reducers/productSlice';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { navData } from '../../navigateData';
import type { ProductType } from '../../types/types';
const InnerCategory = (): JSX.Element => {
  const theme = useTheme();
  const { innerId } = useParams();
  const pages = navData.find((item) => item.subTitles.find((product) => product.path === innerId));
  const innerPage = pages?.subTitles.find((item) => item.path === innerId);
  const dispatch = useAppDispatch();
  const values = useAppSelector((state) => state.product.values);

  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    const filteredProducts = values.filter((item) =>
      innerPage?.category.every((sub) => item.category.includes(sub))
    );
    setProducts(filteredProducts);
    console.log(innerPage);
  }, [values, innerPage?.path]);
  return (
    <Container fixed>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          px: 2,
          my: 4,
          backgroundColor: theme.palette.common.lightGray1
        }}>
        <Typography variant="body1">Toplam {products.length} Ürün</Typography>
        <Sorting products={products} setProducts={setProducts} />
      </Box>

      <Grid container spacing={4} sx={{ alignItems: 'strech', pb: 4 }}>
        {products.length > 0 &&
          products.map((product) => (
            <Grid key={product.id} item xs={12} md={4}>
              <ProductCard {...product} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default InnerCategory;
