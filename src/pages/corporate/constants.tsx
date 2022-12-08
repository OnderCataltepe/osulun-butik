// Partner Images
import goldSq from '../../assets/partners/goldSq.jpg';
import simonSq from '../../assets/partners/simonSq.jpg';
import voigtSq from '../../assets/partners/voigtSq.jpg';

// Types
interface Ctype {
  [prop: string]: string;
}

// Sales Points
export const salesPointsDetails: Ctype[] = [
  {
    name: 'Kardeşler Kıraathanesi ',
    address: 'TaşKöprü Mahallesi, Dikembe Mutombo Caddesi, No: 27B/1, Beyoğlu/İstanbul'
  },
  {
    name: 'Eski Şükran Oteli',
    address: 'Endülüs Mahallesi, Talebe Sokak, No: 41, Arnavutköy/İstanbul'
  },
  {
    name: 'Sohbet Çay Evi ',
    address: 'Kaportacılar, Çarls Dögol Sokak, No:4/A, 34676 Üsküdar/İstanbul'
  },
  { name: 'Dost Kitabevi Önü ', address: 'Kızılay, Karanfil Sokak. No:11, 06420 Çankaya/Ankara' },
  {
    name: 'Burger King Önü ',
    address: 'Katip Mustafa Çelebi, Mah İstiklal Caddesi No:1, 34433 Beyoğlu/İstanbul'
  },
  {
    name: 'Kadıköy Metro Çıkışı ',
    address: 'Osmanağa, Vahap Bey Sk. No:29, 34714 Kadıköy/İstanbul'
  },
  {
    name: 'Galata Köprüsü Üzeri ',
    address: 'Kemankeş Karamustafa Paşa, Galata Köprüsü, 34425 Beyoğlu/İstanbul'
  },
  {
    name: 'Kız Kulesi Karşısı Dördüncü Bank ',
    address: 'Salacak, Üsküdar Harem Sahil Yolu No:24, 34668 Üsküdar/İstanbul'
  }
];

// Partners
export const partners: Ctype[] = [
  {
    name: 'Simon Leviev',
    description:
      'Türkiye, İsrail, Finlandiya, Almanya, Yunanistan ve daha birçok ülkede yatırımı bulunan ünlü iş insanı Simon Leviev ile 2018 yılından itibaren süren ortaklığımız büyüyürek devam etmektedir. Yeni teknolojik sistemlerin entegrasyonu konusunda uzmanlığı sayesinde siz müşterilerimize kolayca erişim sağlıyoruz. Leviev’in dünya çapında, geniş iş ağının yarattığı olanaklarla yatırımlarımızı genişletmekte, hizmet standardımızı ise yükseltmekteyiz.',
    bgColor: 'white',
    italic: '',
    img: simonSq,
    titleColor: 'black',
    textColor: 'black'
  },
  {
    name: 'Friedrich Wilhelm Voigt Foundation',
    description:
      '1849-1922 yılları arasında yaşamış dönemin ünlü iş insanı Friedrich Wilhelm Voigt’in ailesi tarafından 1925\'te kurulan vakfın temel amaçları arasında "kültürel varlıkların korunması, sorunlarının tespiti ve görünürlüğüne katkı sağlamak" yer almaktadır. 500 dolayında kadrolu çalışanı bulunan vakfın yurt dışında da 100\'e yakın temsilciliği bulunmaktadır. Genel merkezi Köningsberg’dedir. Federal devlet ve eyalet yönetimleri tarafından maddi destek alan vakfın bütçesi 2006 yılında 136 milyon Euro olarak açıklanmıştır. ',
    bgColor: '#1A1A1A',
    italic: '',
    img: voigtSq,
    titleColor: '#933E38',
    textColor: 'white'
  },
  {
    name: 'Memet',
    description:
      ' Yanlışlıkla atılan bir sms, temelinde kıymetli madenler bulunan bir ortaklığa dönüştü.  ',
    italic:
      ' "Abi ben memet benim teyzemgil izmirin köyünde zeytinlikteki ahırda yerden çıkma 1650 adet eski altin bulmuşlar osmanlı tuğrası falan var.bu altınları elimizden  cikaralim beni acil ara köyden ayrılamıyom "',
    bgColor: 'white',
    img: goldSq,
    titleColor: 'black',
    textColor: 'black'
  }
];
