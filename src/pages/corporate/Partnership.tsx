import Animate from '../../components/animations/ScrollAnimations';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { partners } from './constants';
const Partnerships = () => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: ' center',
        overflow: 'hidden'
      }}>
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <Typography variant="h1">İş Ortaklarımız</Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.common.brown1, py: 4, px: isMobil ? 6 : 20 }}>
          Sınırlı sayıda tuttuğumuz iş ortaklarımızın tüm ürünlerine yoğun yatırımlar yaparak bilgi
          ve tecrübemizi maksimum düzeyde tutmaya çalışıyoruz. Müşterilerimize sunduğumuz ve
          desteğini vermeye devam ettiğimiz teknolojilerde tüm personelimizin tecrübesini arttırarak
          hizmet kalitemizi ve müşteri memnuniyetini arttırıyoruz.
        </Typography>
      </Box>
      {partners.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              width: '100%',
              height: 'auto',
              p: 4,
              backgroundColor: item.bgColor,
              textAlign: 'center'
            }}>
            <Animate.ScaleIn>
              <Typography variant="h2">{item.name}</Typography>
            </Animate.ScaleIn>
            <Box
              sx={{
                display: 'flex',
                flexDirection: isMobil ? 'column' : index % 2 === 0 ? 'row' : 'row-reverse',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                '& >div': { width: isMobil ? '80%' : '45%', height: 'auto' }
              }}>
              <Animate.FadeRight>
                <Box
                  sx={{
                    width: '75%',
                    boxShadow: '0px 0px 30px -20px #fff',
                    borderRadius: '50%',
                    m: '30px auto',
                    overflow: 'hidden'
                  }}>
                  <img
                    src={item.img}
                    style={{
                      width: '100%'
                    }}
                  />
                </Box>
              </Animate.FadeRight>
              <Animate.FadeLeft>
                <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold' }}>
                  {item.description}
                  {item.italic.length > 0 && <i style={{ fontWeight: 'lighter' }}>{item.italic}</i>}
                </Typography>
              </Animate.FadeLeft>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Partnerships;
