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
import { ProductData } from '../../redux/reducers/productSlice';
import type { ProductType } from '../../types/types';
const ProductCard = (product: ProductType): JSX.Element => {
  const { detailedId, multiId } = useParams();

  const theme = useTheme();
  const navigate = useNavigate();

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
      <CardContent sx={{ width: '100%' }}>
        <Link sx={{ cursor: 'pointer' }} onClick={() => navigate(`/urun/${product.id}`)}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
        </Link>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2">{product.price.toLocaleString()} TL</Typography>
          <Typography
            variant="body2"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: theme.palette.common.orange,
              fontWeight: 'bolder'
            }}>
            Ücretsiz Kargo <LocalShippingIcon sx={{ ml: 1 }} />
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          color="primary"
          disabled={product.amount === 0 ? true : false}
          endIcon={<ShoppingCartIcon />}>
          Sepete Ekle
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
