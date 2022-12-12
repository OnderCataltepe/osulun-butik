import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProductCard from './ProductCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useRef } from 'react';
import type { ProductType } from '../../types/types';

interface MProps {
  contents: ProductType[];
}

const MultiCarousel = ({ contents }: MProps): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  const carousel = useRef<AliceCarousel>(null);

  const carItems = contents.map((product) => (
    <div
      key={product.id}
      style={{
        width: isMobil ? '200px' : '300px',
        padding: 4,
        height: '100%'
      }}>
      <ProductCard {...product} />
    </div>
  ));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& >div >button': {
          border: 'none',
          backgroundColor: 'transparent',
          color: theme.palette.common.gray2,
          fontSize: isMobil ? 40 : 60,
          cursor: 'pointer'
        }
      }}>
      <div>
        <button onClick={(e) => carousel?.current?.slidePrev(e)}>&lang;</button>
      </div>
      <div style={{ width: '90%' }}>
        <AliceCarousel
          infinite
          autoPlayInterval={3000}
          autoPlay
          autoWidth
          disableDotsControls
          disableButtonsControls
          mouseTracking
          ref={carousel}
          items={carItems}
        />
      </div>

      <div>
        <button onClick={(e) => carousel?.current?.slideNext(e)}>&rang;</button>
      </div>
    </Box>
  );
};

export default MultiCarousel;
