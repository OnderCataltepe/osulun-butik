import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { BasketType } from '../../types/types';

const BasketCard = (product: BasketType): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        px: 1
      }}
      onClick={() => navigate(`/urun/${product.id}`)}>
      <CardMedia
        component="img"
        sx={{ width: '90px', cursor: 'pointer' }}
        image={product.image}
        alt="product"
      />

      <CardContent
        sx={{
          textAlign: 'left',
          wordWrap: 'wrap'
        }}>
        <Typography gutterBottom variant="subText" component="div">
          {product.name}
        </Typography>

        <Typography gutterBottom variant="subText" component="div">
          Adet: {product.amount}
        </Typography>
        <Typography gutterBottom variant="subText" component="div">
          Fiyatı: {product.price * product.amount} TL
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BasketCard;
