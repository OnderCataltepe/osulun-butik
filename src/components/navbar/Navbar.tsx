import DrawerComp from './Drawer';
import NavHeader from './NavHeader';
import LargeToolbar from './LargeToolbar';
// MUI
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// MUI COMPONENTS
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const Navbar = (): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static">
      <NavHeader />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff'
        }}>
        {isMobil ? <DrawerComp /> : <LargeToolbar />}
      </Box>
    </AppBar>
  );
};
export default Navbar;
