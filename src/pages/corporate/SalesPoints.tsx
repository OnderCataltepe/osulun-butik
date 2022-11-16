import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

import HandshakeIcon from '@mui/icons-material/Handshake';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Sales {
  [prop: string]: string;
}

const salesPointsDetails: Sales[] = [
  {
    name: 'Kardeşler Kıraathanesi ',
    address: 'TaşKöprü Mahallesi, Dikembe Mutombo Caddesi, No: 27B/1, Beyoğlu/İstanbul'
  },
  {
    name: 'Eski Şükran Oteli',
    address: 'Endülüs Mahallesi, Talebe Sokak, No: 41, Arnavutköy/İstanbul'
  },
  {
    name: 'Sohbet Çay Evi ',
    address: 'Kaportacılar, Çarls Dögol Sokak, No:4/A, 34676 Üsküdar/İstanbul'
  },
  { name: 'Dost Kitabevi Önü ', address: 'Kızılay, Karanfil Sokak. No:11, 06420 Çankaya/Ankara' },
  {
    name: 'Burger King Önü ',
    address: 'Katip Mustafa Çelebi, Mah İstiklal Caddesi No:1, 34433 Beyoğlu/İstanbul'
  },
  {
    name: 'Kadıköy Metro Çıkışı ',
    address: 'Osmanağa, Vahap Bey Sk. No:29, 34714 Kadıköy/İstanbul'
  },
  {
    name: 'Galata Köprüsü Üzeri ',
    address: 'Kemankeş Karamustafa Paşa, Galata Köprüsü, 34425 Beyoğlu/İstanbul'
  },
  {
    name: 'Kız Kulesi Karşısı Dördüncü Bank ',
    address: 'Salacak, Üsküdar Harem Sahil Yolu No:24, 34668 Üsküdar/İstanbul'
  }
];
const SalesPoints = (): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container sx={{ my: 4 }}>
      <Box
        sx={{
          textAlign: 'center'
        }}>
        <Typography variant="h1">Satış Noktalarımız</Typography>
      </Box>
      <Divider
        sx={{ width: '80%', mt: 1, mx: 'auto', textAlign: 'center', borderBottomWidth: 2 }}
      />
      <List
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          width: '100%',
          my: 4
        }}>
        {salesPointsDetails.map((item, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                width: isMobil ? '90%' : '45%',
                backgroundColor: theme.palette.common.lightGray1,
                m: 1,
                boxShadow: '0px 0px 8px -5px rgba(0,0,0,0.75)'
              }}>
              <HandshakeIcon sx={{ mr: 2 }} />
              <ListItemText primary={item.name} secondary={item.address} />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default SalesPoints;
