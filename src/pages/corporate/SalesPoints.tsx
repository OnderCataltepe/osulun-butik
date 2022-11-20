// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// Components, backgrounds and page constants
import salesPointsBg from '../../assets/backgrounds/salesPointsBg.jpg';
import Title from '../../components/body/title/Title';
import { salesPointsDetails } from './constants';

const SalesPoints = (): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Title image={salesPointsBg} color="white" title="Satış Noktalarımız" />
      <List
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          width: '80%',
          my: 6
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
    </Box>
  );
};

export default SalesPoints;
