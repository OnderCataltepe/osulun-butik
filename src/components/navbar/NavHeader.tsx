import NavIcons from './navIcons/NavIcons';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const NavHeader = (): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 1,
        backgroundColor: theme.palette.common.lightGray1,
        zIndex: 9999
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LocalPhoneOutlinedIcon sx={{ fontSize: '12px', marginRight: '3px', color: 'black' }} />
        <Typography sx={{ userSelect: 'none' }} variant="subText">
          +90 (212) 111 11 11
        </Typography>
      </Box>
      <Box>
        <Typography variant="subText">TÜM ÜRÜNLERİMİZDE ÜCRETSİZ KARGO</Typography>
      </Box>
      {!isMobil && <NavIcons color={theme.palette.common.gray2} />}
    </Box>
  );
};

export default NavHeader;
