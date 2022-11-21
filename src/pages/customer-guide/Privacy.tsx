// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CircleIcon from '@mui/icons-material/Circle';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/material/styles';
// Components and background images
import Title from '../../components/body/title/Title';
import collusionBg from '../../assets/backgrounds/privacyBg.png';

const Privacy = (): JSX.Element => {
  const theme = useTheme();
  const iconStyle: SxProps = {
    color: theme.palette.common.orange,
    mr: 1
  };

  return (
    <Box>
      <Title image={collusionBg} color="white" title="Gizlilik Politikamız" />
      <Box>
        <List sx={{ my: 6 }}>
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
