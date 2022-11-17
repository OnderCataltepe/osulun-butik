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

import { salesPointsDetails } from './constants';

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
