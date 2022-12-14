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
                HIZLI VE ??CRETS??Z TESL??MAT STANDARDIMIZ
              </Typography>
              <Typography variant="body2">
                S??l??n Butik olarak kargonuzu en h??zl?? s??rede size ula??t??rmak i??in her t??rl?? imkan??
                kullan??yor ve ??r??n??n??z??n konumunuza g??re 1 ile 5 i?? g??n?? i??erisinde adresinize
                ula??mas??n?? sa??l??yoruz.{' '}
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
                ??CRETS??Z ??ADE
              </Typography>
              <Typography variant="body2">
                Yap??lan al????veri?? risksizdir. Memnuniyetinizi garanti alt??na almak i??in her
                sipari??inizi ??cretsiz olarak iade etme imkan?? sunuyoruz.
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
                G??VENL?? ??DEME
              </Typography>
              <Typography variant="body2">
                Sipari??inizin g??venli oldu??undan emin olman??z i??in her i??lemde G??venli Soket Katman??
                (Secure Socket Layer - SSL) ??ifrelemesi kullan??yoruz.
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
                GLOBAL GARANT??
              </Typography>
              <Typography variant="body2">
                S??l??n Butik, ??r??nlerinizle uzun s??re deneyim ya??ayabilmeniz i??in d??nya ??ap??nda
                garanti ko??ullar?? sunuyor.
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PageLayout;
