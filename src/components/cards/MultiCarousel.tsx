import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProductCard from './ProductCard';
import type { ProductType } from '../../types/types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect, useRef } from 'react';

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
        width: isMobil ? '250px' : '400px',

        height: '100%'
      }}>
      <ProductCard {...product} />
    </div>
  ));

  useEffect(() => {
    console.log(carItems);
  }, []);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& >button': {
          border: 'none',
          backgroundColor: 'transparent',
          fontSize: 50,
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
