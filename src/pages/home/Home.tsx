// Images
import homeBg from '../../assets/backgrounds/home5Bg.jpg';
import clock from '../../assets/home/clock.jpg';
import sculpture from '../../assets/home/sculpture.jpg';
import bridge from '../../assets/home/bridge.jpg';
import gate from '../../assets/home/gate.jpg';
// Components
import PageLayout from '../../layouts/PageLayout';
import MultiCarousel from '../../components/cards/MultiCarousel';
import Subscribe from '../../components/forms/subscribe/Subscribe';
// MUI
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// Hooks and Router
import { useAppSelector, useAppDispatch } from '../../redux/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from '../../redux/reducers/productSlice';
// Types
import type { ProductType } from '../../types/types';
interface AdType {
  id: number;
  title: string;
  bgImage: string;
  path: string;
}
// Values and Constants
const advertisement: AdType[] = [
  {
    id: 1,
    title: 'İki Yakayı Kavuşturan SEN Olmak İster Misin?',
    bgImage: bridge,
    path: 'kategori/gecitler/kopruler'
  },
  {
    id: 2,
    title: 'British Museum Görmeden Harekete Geç',
    bgImage: sculpture,
    path: 'kategori/aksesuarlar/heykeller'
  },
  {
    id: 3,
    title: 'Zamanı Bileğe Vurulmuş Bir Kelepçeden Öğrenemezsin',
    bgImage: clock,
    path: 'kategori/aksesuarlar/saatler'
  },
  {
    id: 4,
    title: 'Kapalı Kapı Yoktur, Yanlış Anahtar Vardır',
    bgImage: gate,
    path: 'kategori/gecitler/sehir-kapilari'
  }
];

const Home = (): JSX.Element => {
  const [trends, setTrends] = useState<ProductType[]>([]);
  const dispatch = useAppDispatch();
  const values = useAppSelector((state) => state.product.values);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (values.length > 0) {
      const val = [...values];
      const products = val.sort((a, b) => 0.5 - Math.random()).slice(0, 8);
      setTrends(products);
    }
  }, [values]);

  return (
    <PageLayout image={homeBg} color="white" title="">
      <>
        <Box sx={{ textAlign: 'center', width: isMobil ? '85%' : '65%', my: 4 }}>
          <Typography variant="h3" sx={{ mb: 2, color: theme.palette.common.gray1 }}>
            Hoşgeldiniz
          </Typography>
          <Typography variant="body1">
            Birikiminizin erimesinden endişe ediyorsanız, getirisi yüksek yatırım fırsatları
            peşindeyseniz doğru adrestesiniz. Minimum riskle maksimum kazanç sağlayacak bir
            yatırımla kendi işinizi kurabilmenin yolu doğru araçlara sahip olmaktan geçer. Doğru
            araçlara ise kısa vadeli ödünler gerektiren seçimlerle mümkündür. Yıllarca ve
            zahmetsizce para kazanmak için daha fazla beklemeyin. Birbirinden eşsiz, nesiller boyu
            varlığını sürdürecek olan ürünlerimizi keşfedin.
          </Typography>

          <Typography></Typography>
        </Box>
        <Box sx={{ width: '100%', px: 2, my: 6, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ borderBottom: '1px solid gray', mb: 2, pb: 1 }}>
            Trend Ürünler
          </Typography>
          {trends.length > 0 && <MultiCarousel contents={trends} />}
        </Box>
        <Grid container sx={{ alignItems: 'strech', pb: 4, my: 2 }}>
          {advertisement.map((item) => (
            <Grid
              item
              key={item.id}
              xs={12}
              md={6}
              sx={{
                p: 2
              }}>
              {' '}
              <Box
                sx={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                  aspectRatio: '1.5',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: ' center',
                  textAlign: 'center',
                  px: 4,
                  cursor: 'pointer',
                  '&:hover >h4': {
                    transform: 'scale(1.1)',
                    transition: 'transform 8s'
                  }
                }}
                onClick={() => navigate(item.path)}>
                <Typography
                  variant="h4"
                  color="secondary"
                  sx={{ textShadow: '7px -0px 10px black' }}>
                  {item.title}
                </Typography>
                <Button
                  variant="outlined"
                  size="large"
                  color="secondary"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    mt: 2,
                    textShadow: '7px -0px 10px black'
                  }}>
                  İncele
                </Button>
              </Box>{' '}
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            backgroundColor: theme.palette.common.lightGray2,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2,
            py: 6
          }}>
          <Subscribe />
        </Box>
      </>
    </PageLayout>
  );
};
export default Home;
