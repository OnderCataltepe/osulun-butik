import { useAppSelector } from '../../redux/hooks/reduxHooks';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ProductCard from '../../components/cards/ProductCard';
import searchImg from '../../assets/backgrounds/searchBg.jpg';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const QueryProducts = (): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  const { searchId } = useParams();
  const products =
    searchId &&
    useAppSelector((state) => state.product.values).filter((product) =>
      product.name.toLowerCase().includes(searchId.toLowerCase())
    );

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: isMobil ? 'flex-end' : 'center',
          justifyContent: 'center',
          pb: isMobil ? '10%' : null,
          width: '100%',
          backgroundImage: `url(${searchImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          aspectRatio: '3'
        }}>
        <Typography variant="h1" sx={{ color: 'white' }}>
          Arama Sonuçları
        </Typography>
      </Box>

      {!products || products.length === 0 ? (
        <Typography sx={{ my: 4 }} variant="h5">
          Aramanıza uygun ürün bulunamadı.
        </Typography>
      ) : (
        <>
          <Typography sx={{ my: 4 }} variant="h5">
            Aramanıza uygun {products.length} ürün bulundu.
          </Typography>
          <Grid container spacing={4} sx={{ alignItems: 'strech', p: 4 }}>
            {products.length > 0 &&
              products.map((product) => (
                <Grid key={product.id} item xs={12} md={3}>
                  <ProductCard {...product} />
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default QueryProducts;
