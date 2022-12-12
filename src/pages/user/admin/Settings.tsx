// Mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// Firebase
import { deleteProduct } from '../../../redux/reducers/productSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';

// Components
import AddProduct from '../../../components/forms/product/AddProduct';
// Types
import type { ProductType } from '../../../types/types';

const Settings = (): JSX.Element => {
  const values = useAppSelector((state) => state.product.values);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));

  const deleteHandle = (id: string): void => {
    dispatch(deleteProduct(id));
  };

  return (
    <Box sx={{ mt: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: isMobil ? '90%' : '500px' }}>
        <Typography color="primary" variant="h2">
          Yeni Ürün Ekle
        </Typography>
        <AddProduct />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        {values.length > 0 &&
          values.map((item: ProductType) => {
            return (
              <Card
                key={item.id}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <CardContent>
                  <Typography variant="h3">{item.name}</Typography>
                  <Typography variant="body2" component="div">
                    {item.description}
                  </Typography>
                  <Typography>{item.price}</Typography>
                  <Typography variant="body2">{item.amount}</Typography>
                </CardContent>
                <Box>
                  {item.images.map((image, index) => {
                    return (
                      image.length > 0 && (
                        <CardMedia
                          key={index}
                          component="img"
                          height="50"
                          image={image}
                          alt="green iguana"
                        />
                      )
                    );
                  })}
                </Box>
                <CardActions>
                  <Button
                    size="small"
                    sx={{ backgroundColor: 'red' }}
                    onClick={() => deleteHandle(item.id)}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            );
          })}
      </Box>
    </Box>
  );
};

export default Settings;
