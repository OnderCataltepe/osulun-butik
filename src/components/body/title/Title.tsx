import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface TProps {
  image: string;
  color: string;
  title: string;
}

const Title = ({ image, color, title }: TProps): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));

  return (
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
  );
};

export default Title;
