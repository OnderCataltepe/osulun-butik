import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SxProps } from '@mui/material/styles';

import ourStoryBg from '../../assets/backgrounds/ourStoryBg.jpg';
import istanbul1 from '../../assets/ourStory/istanbul1.jpg';
import istanbul2 from '../../assets/ourStory/istanbul2.jpg';
import istanbul3 from '../../assets/ourStory/istanbul3.jpg';

import Title from '../../components/body/title/Title';
import Animate from '../../components/animations/ScrollAnimations';
const OurStory = () => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));

  const containerStyle: SxProps = {
    display: 'flex',
    flexDirection: isMobil ? 'column' : 'row',
    justifyContent: 'space-between',
    px: 6,
    alignItems: 'center',
    width: '100%',
    '& >div': { width: isMobil ? '80%' : '45%', height: 'auto' }
  };
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: ' center',
        overflow: 'hidden'
      }}>
      <Title image={ourStoryBg} color="white" title="Hikayemiz" />
      <Box
        sx={{
          ...containerStyle,
          mt: 6
        }}>
        <Animate.FadeRight>
          <Box
            sx={{
              width: '75%',
              boxShadow: '0px 0px 30px -20px #fff',
              m: '30px auto',
              overflow: 'hidden'
            }}>
            <img
              src={istanbul1}
              style={{
                width: '100%'
              }}
            />
          </Box>
        </Animate.FadeRight>
        <Animate.FadeLeft>
          <Typography variant="body1" sx={{ color: 'block', fontWeight: 'bold' }}>
            Osman Ziya Sülün, 1923`te İstanbul`da doğdu. Çocukluğunda yoksul bir hayat süren Sülün,
            eğitimini yarıda bıraktı ve çeşitli işlerde çalıştı. Vizyoner kişiliği, öğrenmeye olan
            tutkusu sayesinde birçok iş dalında genç yaşta başarılı girişimleri oldu.
          </Typography>
        </Animate.FadeLeft>
      </Box>

      <Box sx={{ ...containerStyle, flexDirection: isMobil ? 'column' : 'row-reverse' }}>
        <Animate.FadeLeft>
          <Box
            sx={{
              width: '75%',
              boxShadow: '0px 0px 30px -20px #fff',
              m: '30px auto',
              overflow: 'hidden'
            }}>
            <img
              src={istanbul2}
              style={{
                width: '100%'
              }}
            />
          </Box>
        </Animate.FadeLeft>
        <Animate.FadeRight>
          <Typography variant="body1" sx={{ color: 'block', fontWeight: 'bold' }}>
            Mübadeleye tabi tutulmayan İstanbul’un rum nüfusu zamana yayılarak azalırken kimi iş
            kollarında büyük boşluklar oluşmuştu. Kendisinden çok şey öğrendiği Kumkapılı rum
            Aleko’nun şehri terk etmesi ile birlikte Sülün’ün çıraklık dönemi kapanmıştı. Özellikle
            1950 sonrası Anadolu’dan İstanbul’a yaşanan göç dalgasıyla İstanbul büyüdü, Sülün Osman
            büyüdü. Genel kanının aksine o, göç eden insanlarda ezici bir enginlik, İstanbul’da ise
            tiz bir darlık görüyordu. İş yaşamını ve sosyal sorumluluklarını taşradan gelen insanlar
            üzerine kurguladı.
          </Typography>
        </Animate.FadeRight>
      </Box>
      <Box
        sx={{
          ...containerStyle,
          mb: 6
        }}>
        <Animate.FadeRight>
          <Box
            sx={{
              width: '75%',
              boxShadow: '0px 0px 30px -20px #fff',
              m: '30px auto',
              overflow: 'hidden'
            }}>
            <img
              src={istanbul3}
              style={{
                width: '100%'
              }}
            />
          </Box>
        </Animate.FadeRight>
        <Animate.FadeLeft>
          <Typography variant="body1" sx={{ color: 'block', fontWeight: 'bold' }}>
            Başarılı, paradigmaları altüst eden her insan gibi Sülün’ün de önüne engeller koyuldu.
            Aralıklarla hapis yattı, iftiralar uğradı ama yılmadı. Büyük bir marka yaratmak kolay
            değildi ve o, bu engelleri büyüklüğünün nişaneleri olarak gördü.
          </Typography>
        </Animate.FadeLeft>
      </Box>
    </Box>
  );
};

export default OurStory;
