import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import pageBg from '../../assets/backgrounds/questionBg.jpg';

interface Questions {
  question: string;
  answer: string;
}
const questions: Questions[] = [
  { question: 'Üye Olmadan Alışveriş yapabilir miyim?', answer: 'Evet.' },
  { question: 'Bitcoin ile ödeme yapabilir miyim?', answer: 'Hayır.' },
  {
    question: 'Tarla ile ödeme yapabilir miyim?',
    answer: ' Kaç dönüm? Konumu ve imar durumu nedir? Hissedar var mı?'
  },
  { question: 'Fatura istemiyorum. İndirim Yapar mısınız?', answer: 'Yaparız.' },
  {
    question: 'Palantir kullanarak görüşmek istediğim kişide de palantir olmak zorunda mı?',
    answer: 'Uygun eklentilere sahip başka cihazlar aracılığıyla görüşebilirsiniz'
  },
  {
    question:
      'Dilek ağacından fidan elde edip çoğaltırsak, yeni ağaçlardaki dilekler de gerçekleşir mi?',
    answer: 'Gerçekleşir.'
  }
];
const Faq = (): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${pageBg})`
      }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h1">Sıkça Sorulan Sorular</Typography>
        <Typography sx={{ color: theme.palette.common.brown1 }}>
          Sorularınıza yanıt bulamadıysanız bizimle iletişime geçebilirsiniz.
        </Typography>
      </Box>
      {questions.map((item, index) => {
        return (
          <Accordion key={index} sx={{ width: isMobil ? '100%' : '600px' }} disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{ backgroundColor: theme.palette.common.lightGray2 }}>
              <Typography variant="body1">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 2 }}>
              <Typography variant="body2">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default Faq;
