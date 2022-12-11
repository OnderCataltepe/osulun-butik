import DrawerComp from './toolbars/Drawer';
import NavHeader from './NavHeader';
import LargeToolbar from './toolbars/LargeToolbar';
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
    <AppBar position="fixed" sx={{ backgroundColor: 'transparent' }}>
      <NavHeader />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.75)',
          boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(3px)'
        }}>
        {isMobil ? <DrawerComp /> : <LargeToolbar />}
      </Box>
    </AppBar>
  );
};
export default Navbar;
