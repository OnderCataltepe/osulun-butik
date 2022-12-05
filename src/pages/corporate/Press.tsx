// MUI
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// Components and background images
import pressBg from '../../assets/backgrounds/pressBg.jpg';
import PageLayout from '../../layouts/PageLayout';
// Press images
import sulun1 from '../../assets/press/sulun1.jpg';
import sulun2 from '../../assets/press/sulun2.jpg';
import sulun3 from '../../assets/press/sulun3.jpg';
import sulun4 from '../../assets/press/sulun4.jpg';
import sulun5 from '../../assets/press/sulun5.jpg';
import sulun6 from '../../assets/press/sulun6.jpg';

const itemData = [sulun1, sulun2, sulun3, sulun4, sulun5, sulun6];

const Press = () => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <PageLayout image={pressBg} title="Basında Biz" color="white">
      <ImageList sx={{ width: '80%', my: 6 }} variant="masonry" cols={isMobil ? 1 : 3} gap={8}>
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={`${item}?w=248&fit=crop&auto=format`}
              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="sülün haber sayfası"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </PageLayout>
  );
};

export default Press;
