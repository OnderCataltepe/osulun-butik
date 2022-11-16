import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import CircleIcon from '@mui/icons-material/Circle';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SxProps } from '@mui/material/styles';

const Privacy = (): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  const iconStyle: SxProps = {
    color: theme.palette.common.brown2,
    mr: 1
  };
  return (
    <Box sx={{ p: 4, my: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h1">Gizlilik Politikamız</Typography>
        <Divider
          sx={{
            width: isMobil ? '90%' : '600px',
            mx: 'auto',
            mt: 1,
            backgroundColor: theme.palette.common.lightGray2,
            borderBottomWidth: 2
          }}
        />
      </Box>

      <Box>
        <List>
          <ListItem>
            <CircleIcon sx={iconStyle} />
            <Typography>
              Müşterilerimize daha iyi hizmet verebilmek amacıyla bazı kişisel bilgilerinizi (isim,
              yaş, ilgi alanlarınız, e-posta, kart bilgileriniz, annenizin kızlık soyadı,
              yükseleniniz vb.) sizlerden talep etmekteyiz.
            </Typography>
          </ListItem>
          <ListItem>
            <CircleIcon sx={iconStyle} />
            <Typography>
              Toplanan bu bilgiler, dönemsel kampanyalar, size yönelik özel promosyon
              faaliyetlerinin kurgulanması gibi nedenlerle sadece firma bünyemizde kullanılmaktadır.
            </Typography>
          </ListItem>
          <ListItem>
            <CircleIcon sx={iconStyle} />
            <Typography>
              Bilgileriniz üçüncü şahıslarla kesinlikle paylaşılmamakta, faaliyet dışı bir nedenle
              ticari amaçla kullanılmamakta ve de satılmamaktadır.
            </Typography>
          </ListItem>
          <ListItem>
            <CircleIcon sx={iconStyle} />
            <Typography>
              İşlemin kesintiye uğraması, hata, ihmal, kesinti, silinme, kayıp, işlemin veya
              iletişimin gecikmesi, bilgisayar virüsü, iletişim hatası, hırsızlık, imha veya izinsiz
              olarak kayıtlara girilmesi, değiştirilmesi veya kullanılması hususunda sorumluluk
              müşteriye aittir.
            </Typography>
          </ListItem>
          <ListItem>
            <CircleIcon sx={iconStyle} />
            <Typography>
              Resmi makamlarca usulü dairesinde bilgilerinizin talep edilmesi halinde ve
              yürürlükteki emredici mevzuat hükümleri gereğince resmi makamlara açıklama yapmak
              zorunda olduğumuz için bilgileriniz anında resmi makamlara açıklanacaktır.
            </Typography>
          </ListItem>
          <ListItem>
            <CircleIcon sx={iconStyle} />
            <Typography>
              Ödeme sırasında istenen kredi kartı bilgileriniz, alışveriş yapan siz değerli
              müşterilerimizin güvenliğini en üst seviyede tutmak amacıyla hiçbir şekilde
              sunucularımızda tutulmamaktadır.
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Privacy;
