// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// Components
import MultiCarousel from '../../../components/cards/MultiCarousel';
// Hooks and helpers
import { useAppSelector, useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { updateBasket } from '../../../utils';
import { userBasket } from '../../../redux/reducers/userSlice';
// Firebase
import { doc, updateDoc, db } from '../../../firebase/config';
// Types
import type { BasketType } from '../../../types/types';

const UserBasket = () :JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  const basket = useAppSelector((state) => state.user.values.basket);
  const user = useAppSelector((state) => state.user);
  const products = useAppSelector((state) => state.product.values);
  const dispatch = useAppDispatch();

  const updateAmount = async (item: BasketType, type: string) => {
    const newBasket = updateBasket(
      user.values.basket,
      {
        price: item.price,
        id: item.id,
        amount: type === 'increase' ? 1 : -1,
        name: item.name,
        image: item.image
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
    <Container
      sx={{
        mt: isMobil ? 14 : 18,
        minHeight: '70vh',
        display: 'flex',
        flexDirection: isMobil ? 'column' : 'row',
        alignItems: isMobil ? 'center' : 'flex-start',
        justifyContent: 'space-between'
      }}>
      {basket.length > 0 ? (
        <>
          <Box
            sx={{
              display: 'flex',
              width: isMobil ? '100%' : '70%',
              flexDirection: 'column',
              alignItems: 'center',
              pb: isMobil ? 0 : 4
            }}>
            <Typography variant="h3" sx={{ mb: 4 }}>
              Sepetim (
              {basket
                .map((item) => item.amount)
                .reduce((a, b) => a + b)
                .toLocaleString()}{' '}
              Ürün)
            </Typography>

            {basket.map((item) => (
              <Card
                key={item.id}
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: 2,
                  my: 1
                }}>
                <CardMedia
                  component="img"
                  sx={{ width: '100px', height: 'auto', cursor: 'pointer' }}
                  image={item.image}
                  alt="product"
                />
                <CardContent sx={{ display: 'flex' }}>
                  <div>
                    <Typography variant="body2">{item.name}</Typography>
                    <Typography variant="body2">
                      {(item.price * item.amount).toLocaleString() + ' TL'}
                    </Typography>
                    <Typography variant="body2">Adet: {item.amount}</Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <div>
                    <Button
                      sx={{ px: 0 }}
                      aria-label="reduce"
                      onClick={() => updateAmount(item, 'decrease')}>
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <input
                      style={{ textAlign: 'center', width: '20px', margin: '0 5px' }}
                      value={item.amount}
                      readOnly
                    />
                    <Button
                      sx={{ p: 0 }}
                      aria-label="increase"
                      onClick={() => updateAmount(item, 'increase')}>
                      <AddIcon fontSize="small" />
                    </Button>
                  </div>
                </CardActions>
              </Card>
            ))}
          </Box>
          <Divider
            orientation={isMobil ? 'horizontal' : 'vertical'}
            flexItem
            sx={{ my: isMobil ? 4 : 0 }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobil ? 'center' : 'flex-start',
              mb: 4,
              width: isMobil ? '100%' : '25%'
            }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Toplam Tutar: {'  '}
              <span style={{ fontWeight: 'bold', letterSpacing: '1px', fontSize: '16px' }}>
                {basket
                  .map((item) => item.price * item.amount)
                  .reduce((a, b) => a + b)
                  .toLocaleString()}
                TL
              </span>
            </Typography>

            <TextField
              id="filled-multiline-static"
              label="Sipariş Notunuz"
              multiline
              rows={4}
              defaultValue=""
              variant="filled"
              sx={{ mb: 2, width: isMobil ? '80%' : '100%' }}
            />
            <Button
              variant="contained"
              disabled={basket.length === 0 ? true : false}
              color="warning"
              onClick={() => alert('That`s enough')}>
              Sepeti Onayla
            </Button>
          </Box>
        </>
      ) : (
        <Box sx={{ width: '100%', textAlign: 'center', mb: 4 }}>
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShoppingCartIcon color="warning" />
              <Typography sx={{ ml: 2 }}>Sepetinizde ürün bulunmamaktadır.</Typography>
            </CardContent>
          </Card>
          <Typography variant="h4">Alışverişe Başla</Typography>
          <Divider orientation="horizontal" sx={{ mb: 2, mt: 1 }} />
          {products.length > 0 && <MultiCarousel contents={products} />}
        </Box>
      )}
    </Container>
  );
};

export default UserBasket;
