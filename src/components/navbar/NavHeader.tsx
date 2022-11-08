import NavIcons from './NavIcons';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import '../../styles/scss/navbar.scss';
import { useTheme } from '@mui/material/styles';

const NavHeader = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 1,
        backgroundColor: theme.palette.common.lightGray1
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LocalPhoneOutlinedIcon sx={{ fontSize: '12px', marginRight: '3px' }} />
        <Typography variant="subText">+90 (212) 111 11 11</Typography>
      </Box>
      <Box>
        <Typography variant="subText">TÜM ÜRÜNLERİMİZDE ÜCRETSİZ KARGO</Typography>
      </Box>
      <NavIcons />
    </Box>
  );
};

export default NavHeader;
