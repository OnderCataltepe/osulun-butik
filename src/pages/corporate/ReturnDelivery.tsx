import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useTheme } from '@mui/material/styles';

const ReturnDelivery = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 4, my: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h1">İade ve Değişim Prosedürü</Typography>
      </Box>
      <Box>
        <Typography sx={{ mb: 2 }}>
          Aldığınız ürünlerin ayıplı mal olarak değerlendirilemeyeceği durumlarda ilgili kanun
          hükümleri gereği değişimi <span style={{ fontWeight: 'bold' }}>yapılmamaktadır</span>.
        </Typography>
        <Typography>
          Mesafeli Satış Sözleşmesi Yönetmeliği 15. Maddesi uyarınca alacağınız ürünler, 6052 sayılı
          Tüketicinin Korunması Hakkında Kanun’da bahsedilen cayma hakkından muaf tutulmuştur.
          İnternetten alınmış dahi olsalar e-ticaret sitesi tarafından geri alınması zorunluluğu
          bulunmamaktadır. Fakat Sülün Osman&apos;ın yüksek Müşteri Memnuniyeti ilkelerine uygun
          olarak, yapacağınız alışverişlerinizi fatura tarihinden itibaren 7 gün içerisinde;
          <List>
            <ListItem>
              <CircleIcon sx={{ color: theme.palette.common.brown2, mr: 1 }} />
              <Typography>
                Sülün Osman&apos;a faks çekerek ürün iadesi için onay alınması,
              </Typography>
            </ListItem>
            <ListItem>
              <CircleIcon sx={{ color: theme.palette.common.brown2, mr: 1 }} />
              <Typography>
                Alınan onayın ardından herhangi bir satış noktlarımızdan para iadesi
                yapılabilecektir.
              </Typography>
            </ListItem>
          </List>
          İade hakkının geçerli olabilmesi için;
          <List>
            <ListItem>
              <CircleIcon sx={{ color: theme.palette.common.brown2, mr: 1 }} />
              <Typography>Fatura tarihinden itibaren 7 gün içinde kargoya verilmesi,</Typography>
            </ListItem>
            <ListItem>
              <CircleIcon sx={{ color: theme.palette.common.brown2, mr: 1 }} />
              <Typography>
                Ürünün üzerindeki fiyat etiketinin çıkarılmamış, ürünün kullanılmamış ve yeniden
                satılabilir durumda olması,
              </Typography>
            </ListItem>
            <ListItem>
              <CircleIcon sx={{ color: theme.palette.common.brown2, mr: 1 }} />
              <Typography>
                Varsa sertifikası ve ürün kutusu ve paketleri ile birlikte gönderilmesi
                gerekmektedir.
              </Typography>
            </ListItem>
          </List>
        </Typography>
        <Typography>
          Ürünün iadeye uygun durumda ulaştırılması ile ilgili tüm sorumluluk ve maliyetler
          tüketiciye aittir. İade kargo sürecinden tüketici sorumludur. Bu şartlara uymayan
          ürünlerin iadesi için onay verilemeyecektir. Bu şartlara uymamasına rağmen tarafımıza
          gönderilen ürünler, satış yapılan adrese tutanak ile iade edilecektir.
        </Typography>
      </Box>
    </Box>
  );
};

export default ReturnDelivery;
