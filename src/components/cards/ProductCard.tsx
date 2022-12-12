// Carousel component
import Carousel from 'react-material-ui-carousel';
// MUI
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// Hooks
import { useAppSelector, useAppDispatch } from '../../redux/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
// data and helpers
import { userBasket } from '../../redux/reducers/userSlice';
import { updateBasket } from '../../utils';
// Firebase
import { doc, updateDoc, db } from '../../firebase/config';
// Types
import type { ProductType } from '../../types/types';

const ProductCard = (product: ProductType): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  const user = useAppSelector((state) => state.user);
  const products = useAppSelector((state) => state.product.values);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addProduct = async () => {
    const newBasket = updateBasket(
      user.values.basket,
      {
        price: product.price,
        id: product.id,
        amount: 1,
        name: product.name,
        image: product.images[0]
      },
      products
    );
    if (user.isAuth) {
      const docRef = doc(db, 'users', user.values.uid);
      await updateDoc(docRef, { basket: newBasket });
      dispatch(userBasket(newBasket));
    } else {
      localStorage.setItem('basket', JSON.stringify(newBasket));
      dispatch(userBasket(newBasket));
    }
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
      }}>
      <Carousel sx={{ width: '100%' }}>
        {product.images
          .filter((item) => item !== '')
          .map((item, index) => (
            <CardMedia
              key={index}
              component="img"
              sx={{ width: '100%', cursor: 'pointer' }}
              onClick={() => navigate(`/urun/${product.id}`)}
              image={item}
              alt="product"
            />
          ))}
      </Carousel>
      <CardContent
        sx={{
          width: '100%',
          '&>a': { textDecoration: 'none' },
          '&>a:hover': { textDecoration: 'underline' }
        }}>
        <Link sx={{ cursor: 'pointer' }} onClick={() => navigate(`/urun/${product.id}`)}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
        </Link>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Typography variant="body2">{product.price.toLocaleString()} TL</Typography>
          <Typography
            variant="body2"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.palette.common.orange,
              fontWeight: 'bolder'
            }}>
            Ücretsiz Kargo <LocalShippingIcon sx={{ ml: 0 }} />
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          sx={{ '&:hover': { backgroundColor: 'black', color: 'white' } }}
          disabled={product.amount === 0 ? true : false}
          endIcon={<ShoppingCartIcon />}
          onClick={addProduct}>
          Sepete Ekle
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
