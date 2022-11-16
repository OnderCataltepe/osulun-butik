import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Contacts = (): JSX.Element => {
  return (
    <Container
      sx={{
        flexDirection: 'column',
        display: 'flex',
        my: 8,
        boxShadow: '0px 0px 10px -4px rgba(0,0,0,0.75);'
      }}>
      <Box sx={{ width: '100%', textAlign: 'center', my: 4 }}>
        <Typography variant="h1">İletişim</Typography>
      </Box>
      <Box>
        <Typography>
          {' '}
          <span style={{ fontWeight: 'bold' }}>Adres:</span> Kemankeş Karamustafa Paşa, Galata
          Köprüsü, 34425 Beyoğlu/İstanbul
        </Typography>
        <Typography>
          {' '}
          <span style={{ fontWeight: 'bold' }}>Tel:</span> +90 (212) 111 11 11
        </Typography>
        <Typography>
          {' '}
          <span style={{ fontWeight: 'bold' }}>Whatsapp:</span> 0542 222 22 22
        </Typography>
        <Typography>
          {' '}
          <span style={{ fontWeight: 'bold' }}>E-posta:</span> sUlUn_Butiq34@mynet.com.tr (iki u
          harfi arasındaki küçük L)
        </Typography>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 4 }}>
        <div style={{ aspectRatio: '2/1', width: '100%' }}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=galata%20k%C3%B6pr%C3%BCs%C3%BC&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
      </Box>
    </Container>
  );
};
export default Contacts;
