// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HttpsIcon from '@mui/icons-material/Https';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// Types
import { SxProps } from '@mui/material/styles';
interface TProps {
  image: string;
  color: string;
  title: string;
  children: JSX.Element;
}

const PageLayout = ({ image, color, title, children }: TProps): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  // styles
  const paperStyle: SxProps = {
    display: 'flex',
    alignItems: 'flex-start',
    boxShadow: 'none',
    backgroundColor: 'inherit',
    p: 2,
    '& >div': {
      mr: 1
    }
  };

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
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          aspectRatio: '2.2'
        }}>
        <Typography variant="h1" sx={{ color: { color } }}>
          {title}
        </Typography>
      </Box>
      {children}

      <Grid container sx={{ p: 2, borderTop: 1 }}>
        <Grid item xs={6} md={3}>
          <Paper sx={paperStyle}>
            <div>
              <LocalShippingIcon sx={{ mr: 1 }} />
            </div>
            <div>
              {' '}
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                HIZLI VE ÜCRETSİZ TESLİMAT STANDARDIMIZ
              </Typography>
              <Typography variant="body2">
                Sülün Butik olarak kargonuzu en hızlı sürede size ulaştırmak için her türlü imkanı
                kullanıyor ve ürününüzün konumunuza göre 1 ile 5 iş günü içerisinde adresinize
                ulaşmasını sağlıyoruz.{' '}
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={paperStyle}>
            <div>
              <KeyboardReturnIcon />
            </div>
            <div>
              {' '}
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                ÜCRETSİZ İADE
              </Typography>
              <Typography variant="body2">
                Yapılan alışveriş risksizdir. Memnuniyetinizi garanti altına almak için her
                siparişinizi ücretsiz olarak iade etme imkanı sunuyoruz.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={paperStyle}>
            <div>
              <HttpsIcon />
            </div>
            <div>
              {' '}
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                GÜVENLİ ÖDEME
              </Typography>
              <Typography variant="body2">
                Siparişinizin güvenli olduğundan emin olmanız için her işlemde Güvenli Soket Katmanı
                (Secure Socket Layer - SSL) şifrelemesi kullanıyoruz.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={paperStyle}>
            <div>
              <LanguageIcon />
            </div>
            <div>
              {' '}
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                GLOBAL GARANTİ
              </Typography>
              <Typography variant="body2">
                Sülün Butik, ürünlerinizle uzun süre deneyim yaşayabilmeniz için dünya çapında
                garanti koşulları sunuyor.
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PageLayout;
