import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { SxProps } from '@mui/material/styles';
import logoFooter from '../../assets/logoFooter.jpg';

const Footer = () => {
  const theme = useTheme();
  const boxStyle: SxProps = {
    display: 'flex',
    flexDirection: 'column',

    '& >a': {
      marginBottom: '4px',
      textDecoration: 'none',
      color: 'white',
      '&:hover': {
        color: theme.palette.common.orange
      }
    }
  };
  const paperStyle: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: 'none',
    backgroundColor: 'inherit'
  };
  return (
    <footer
      style={{
        padding: '0 5px',
        backgroundColor: 'black',
        width: '100%'
      }}>
      <Grid container spacing={2} sx={{ py: 2 }}>
        <Grid item xs={6} md={3}>
          <Paper sx={paperStyle}>
            <img alt="kartvisit" src={logoFooter} style={{ width: '80%', height: 'auto' }} />
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={paperStyle}>
            <Box sx={boxStyle}>
              <Typography variant="h6" sx={{ color: theme.palette.common.gray2 }} gutterBottom>
                Müşteri Hizmetleri
              </Typography>
              <Link to="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</Link>
              <Link to="/iade-ve-degisim">İade ve Değişim</Link>
              <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={paperStyle}>
            <Box sx={boxStyle}>
              <Typography variant="h6" sx={{ color: theme.palette.common.gray2 }} gutterBottom>
                Kurumsal
              </Typography>
              <Link to="/hikayemiz">Hikayemiz</Link>
              <Link to="/basinda-biz">Basında Biz</Link>
              <Link to="/ortakliklar">Ortaklıklar</Link>
              <Link to="/satis-noktalarimiz">Satış Noktaları</Link>
              <Link to="/iletisim">İletişim</Link>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={paperStyle}>
            <Typography variant="h6" sx={{ color: theme.palette.common.gray2 }} gutterBottom>
              Sosyal Medya
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <MuiLink target="_blank" href="https://www.instagram.com" rel="noreferrer">
                <InstagramIcon
                  sx={{
                    borderRadius: '5px',
                    color: 'white',
                    background:
                      'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
                  }}
                />
              </MuiLink>
              <MuiLink target="_blank" href="https://www.twitter.com" rel="noreferrer">
                <TwitterIcon />
              </MuiLink>
              <MuiLink target="_blank" href="https://www.facebook.com" rel="noreferrer">
                <FacebookIcon
                  sx={{
                    color: '#3b5998',
                    backgroundImage:
                      'linear-gradient( to bottom, transparent 20%, white 20%, white 93%, transparent 80% );',
                    backgroundSize: ' 50% 94%',
                    backgroundPosition: '60% 0',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              </MuiLink>
              <MuiLink target="_blank" href="https://www.youtube.com" rel="noreferrer">
                <YouTubeIcon sx={{ color: '#FF0000' }} />
              </MuiLink>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: theme.palette.common.gray2, my: 1, width: '100%' }} />
      <Typography variant="body2" sx={{ color: theme.palette.common.gray2, pb: 1 }}>
        {' '}
        2022 Sulun Boutique Limited. All right reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
