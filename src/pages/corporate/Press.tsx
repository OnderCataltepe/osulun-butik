import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import sulun1 from '../../assets/press/sulun1.jpg';
import sulun2 from '../../assets/press/sulun2.jpg';
import sulun3 from '../../assets/press/sulun3.jpg';
import sulun4 from '../../assets/press/sulun4.jpg';
import sulun5 from '../../assets/press/sulun5.jpg';
import sulun6 from '../../assets/press/sulun6.jpg';
import { Typography } from '@mui/material';
const itemData = [
  {
    img: sulun1,
    title: 'Bed'
  },
  {
    img: sulun2,
    title: 'Books'
  },
  {
    img: sulun3,
    title: 'Sink'
  },
  {
    img: sulun4,
    title: 'Kitchen'
  },
  {
    img: sulun5,
    title: 'Blinds'
  },
  {
    img: sulun6,
    title: 'Chairs'
  }
];
const Press = () => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container sx={{ width: '80%', my: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h1">Basında Biz </Typography>
      </Box>
      <ImageList variant="masonry" cols={isMobil ? 1 : 3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default Press;
