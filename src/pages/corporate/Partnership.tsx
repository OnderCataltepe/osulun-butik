import Animate from '../../components/animations/ScrollAnimations';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import grayBg from '../../assets/backgrounds/grayBg.jpg';
import simon from '../../assets/partners/simon.jpg';

const partners = [{ name: 'Simon Leviev', description: 'lorem', backImg: grayBg, img: simon }];

const Partnerships = () => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: ' center' }}>
      <Animate.FadeIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.FadeIn>
      <Animate.FadeUp>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.ScaleIn>
      <Animate.FadeIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.FadeIn>
      <Animate.FadeUp>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.ScaleIn>
      <Animate.FadeIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.FadeIn>
      <Animate.FadeUp>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.ScaleIn>
      <Animate.FadeIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.FadeIn>
      <Animate.FadeUp>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.ScaleIn>
      <Animate.FadeIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.FadeIn>
      <Animate.FadeUp>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.ScaleIn>
      <Animate.FadeLeft>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.FadeLeft>
      <Animate.FadeUp>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur
          fugit rerum distinctio non recusandae expedita ipsum!
        </p>
      </Animate.ScaleIn>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          p: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${grayBg})`,
          textAlign: 'center'
        }}>
        <Animate.ScaleIn>
          <Typography variant="h2">Simon Leviev</Typography>
        </Animate.ScaleIn>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobil ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            '& >div': { width: isMobil ? '80%' : '40%', height: 'auto' }
          }}>
          <Animate.FadeRight>
            <div style={{ width: '95%', boxShadow: '0px 0px 40px -20px #fff' }}>
              <img
                src={simon}
                style={{
                  width: '100%'
                }}
              />
            </div>
          </Animate.FadeRight>
          <Animate.FadeLeft>
            <Typography variant="body1" sx={{ color: 'white' }}>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reprehenderit, quidem
              voluptate quos veritatis maxime optio animi accusantium veniam ab ex incidunt beatae
              dolor tenetur itaque eius libero reiciendis porro. Corrupti accusamus sint enim?
              Magnam eaque iusto maxime distinctio. Perferendis excepturi, officiis ut possimus in
              natus voluptatum eveniet nobis vel doloremque blanditiis, impedit consequuntur ipsa
              assumenda. Nulla, cumque quae. Recusandae? Nostrum laudantium, repellendus saepe
              explicabo, corporis quasi alias quas quibusdam aspernatur, amet quisquam omnis minima
              fugit magni natus iure repellat provident molestias eaque facere sint corrupti nulla
              architecto! Reiciendis, aspernatur! Optio laudantium maiores dignissimos alias eos
              atque molestias, dicta vitae temporibus inventore suscipit qui nesciunt deserunt
              recusandae repudiandae quis tempore. Soluta doloremque obcaecati nihil quidem
              architecto aperiam non vitae nisi! Odit, esse rerum explicabo voluptatum voluptates
              error reiciendis sed ea ex itaque molestias ut eos distinctio autem obcaecati
              repellendus deserunt, dolorum officia, nemo amet. Rem quo perferendis voluptatem sed
              dignissimos?{' '}
            </Typography>
          </Animate.FadeLeft>
        </Box>
      </Box>
    </Box>
  );
};

export default Partnerships;
