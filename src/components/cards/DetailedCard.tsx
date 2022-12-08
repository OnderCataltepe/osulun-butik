import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks';
import { getProducts, deleteProduct } from '../../redux/reducers/productSlice';
import ProductCard from './ProductCard';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams } from 'react-router-dom';
import type { ProductType } from '../../types/types';
import Carousel from 'react-material-ui-carousel';
import MultiCarousel from './MultiCarousel';
const DetailedCard = (): JSX.Element => {
  const theme = useTheme();
  const { detailedId } = useParams();
  const values = useAppSelector((state) => state.product.values);
  const [similarProducts, setSimilarProducts] = useState<ProductType[]>([]);
  const [detailedProduct, setDetailedProduct] = useState<ProductType>();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  const [count, setCount] = useState(1);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    const newPro = values.filter((item) => item.id === detailedId);
    const similar = values.filter(
      (item) =>
        item.id !== detailedId && newPro[0].category.some((sub) => item.category.includes(sub))
    );
    setSimilarProducts(similar);
    setDetailedProduct(newPro[0]);
  }, [values, detailedId]);

  return (
    <Container
      fixed
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', my: 8 }}>
      {detailedProduct && (
        <Card
          sx={{
            p: 2,
            my: 12,

            display: 'flex',
            flexDirection: isMobil ? 'column' : 'row',
            justifyContent: 'space-between'
          }}>
          <Carousel sx={{ width: isMobil ? '100%' : '55%' }}>
            {detailedProduct.images
              .filter((item) => item !== '')
              .map((item, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  sx={{ width: '100%' }}
                  image={item}
                  alt="product"
                />
              ))}
          </Carousel>
          <Box
            sx={{
              width: isMobil ? '100%' : '40%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly'
            }}>
            <div>
              <Typography gutterBottom variant="h3" component="div">
                {detailedProduct.name}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 2
                }}>
                <Typography variant="body1">{detailedProduct.price.toLocaleString()} TL</Typography>
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
            </div>

            <div>
              <Divider variant="fullWidth" />
              <Accordion elevation={0} disableGutters>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography variant="body1">Ürün Açıklaması</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 2 }}>
                  <Typography variant="body2">{detailedProduct.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion elevation={0} disableGutters>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header">
                  <Typography variant="body1">Satış Sonrası Destek</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 2 }}>
                  <Typography variant="body2">Daima yanınızdayız.</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion elevation={0} disableGutters>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header">
                  <Typography variant="body1">Ödeme Bilgisi</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 2 }}>
                  <Typography variant="body2">
                    Siparişinizin ödemesini kredi kartınızla, banka kartınızla siteden direkt
                    olarak, EFT ve HAVALE şeklinde gerçekleştirebilirsiniz. Sitemizden Bonus,
                    Maximum, Axess, CardFinans, Paraf ve Advantage programlarına dahil olan tüm
                    kredi kartlarınız ile siparişlerinizi vade farksız 3 taksitle, vade farkı ile 9
                    taksite kadar gerçekleştirebilirsiniz. Kredi kartı kullanmayan üyelerimiz Tüm
                    Bankaların HESAP/MAAŞ kartları ile sitemizden ödeme gerçekleştirebilirler.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Divider variant="fullWidth" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
              <div>
                <Button
                  sx={{ px: 0 }}
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                  }}>
                  <RemoveIcon fontSize="small" />
                </Button>
                <input
                  style={{ textAlign: 'center', width: '20px', margin: '0 5px' }}
                  value={detailedProduct.amount === 0 ? 0 : count}
                  readOnly
                />
                <Button
                  sx={{ p: 0 }}
                  aria-label="increase"
                  onClick={() => {
                    setCount(Math.min(count + 1, values[0].amount));
                  }}>
                  <AddIcon fontSize="small" />
                </Button>
              </div>
              <Button
                variant="outlined"
                size="small"
                sx={{ '&:hover': { backgroundColor: 'black', color: 'white' } }}
                color="primary"
                disabled={detailedProduct.amount === 0 ? true : false}
                endIcon={<ShoppingCartIcon />}>
                Sepete Ekle
              </Button>
            </div>
          </Box>
        </Card>
      )}

      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Benzer Ürünler
        </Typography>
        {similarProducts.length > 0 && <MultiCarousel contents={similarProducts} />}
      </Box>
    </Container>
  );
};

export default DetailedCard;
