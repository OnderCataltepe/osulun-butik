// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SxProps } from '@mui/material/styles';
// images
import ourStoryBg from '../../assets/backgrounds/ourStoryBg.jpg';
import istanbul1 from '../../assets/ourStory/istanbul1.jpg';
import istanbul2 from '../../assets/ourStory/istanbul2.jpg';
import istanbul3 from '../../assets/ourStory/istanbul3.jpg';
// Components
import Animate from '../../components/animations/ScrollAnimations';
import PageLayout from '../../layouts/PageLayout';

const OurStory = (): JSX.Element => {
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
    <PageLayout image={ourStoryBg} color="white" title="Hikayemiz">
      <>
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
            <Typography
              variant="body1"
              sx={{ color: 'block', fontWeight: 'bold', textAlign: 'center' }}>
              Osman Ziya Sülün, 1923`te İstanbul`da doğdu. Çocukluğunda yoksul bir hayat süren
              Sülün, eğitimini yarıda bırakmak zorunda kaldı ve erken yaşta çeşitli işlerde çalıştı.
              Vizyoner kişiliği, öğrenmeye olan tutkusu sayesinde birçok iş dalında genç yaşta
              deneyimler edindi. İş seçmedi, çalıştığı her yeri aynı zamanda bir okul olarak gördü.
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
            <Typography
              variant="body1"
              sx={{ color: 'block', fontWeight: 'bold', textAlign: 'center' }}>
              Mübadeleye tabi tutulmayan İstanbul’un Rum nüfusu zamana yayılarak azalırken kimi iş
              kollarında büyük boşluklar oluşmuştu. Kendisinden çok şey öğrendiği Kumkapılı Rum
              Aleko’nun şehri terk etmesi ile birlikte Sülün’ün çıraklık dönemi kapanmıştı.
              Özellikle 1950 sonrası Anadolu’dan İstanbul’a yaşanan göç dalgasıyla İstanbul büyüdü,
              Sülün Osman büyüdü. Genel kanının aksine o, göç eden insanlarda ezici bir enginlik,
              İstanbul’da ise tiz bir darlık görüyordu. İş yaşamını ve sosyal sorumluluk projelerini
              taşradan gelen insanlar üzerine kurguladı.
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
            <Typography
              variant="body1"
              sx={{ color: 'block', fontWeight: 'bold', textAlign: 'center' }}>
              Başarılı, paradigmaları altüst eden her insana yapıldığı gibi Sülün’ün de önüne
              engeller koyuldu. Aralıklarla hapis yattı, iftiralar uğradı ama yılmadı. Büyük bir
              marka yaratmak kolay değildi ve o, bu engelleri büyüklüğünün nişaneleri olarak gördü.
            </Typography>
          </Animate.FadeLeft>
        </Box>
      </>
    </PageLayout>
  );
};

export default OurStory;
