import bridgeImg from '../../assets/products/gatesAndBridges/bridges/bogazici/bogazici1.jpg';
import cityGateImg from '../../assets/products/gatesAndBridges/cityGates/ankara/konya/konya1.jpg';
import shipImg from '../../assets/products/transportation/seaway/vapur1.jpg';
import busImg from '../../assets/products/transportation/road/bus/bus1.jpg';
import trainImg from '../../assets/products/transportation/railway/marmaray/marmaray1.jpg';
import watchImg from '../../assets/products/accessories/watches/dolmabahceWatch/dolmabahce2.jpg';
import sculptureImg from '../../assets/products/accessories/sculptures/troya/troya1.jpg';

export const navPages = [
  { expand: false, title: 'Anasayfa', path: '/home', subTitles: [] },
  {
    expand: true,
    title: 'Köprüler / Geçitler',
    path: '/gecitler',
    subTitles: [
      { title: 'Köprüler', path: '/kopruler', img: bridgeImg },
      { title: 'Şehir Kapıları', path: 'sehir-kapilari', img: cityGateImg }
    ]
  },
  {
    expand: true,
    title: 'Ulaşım',
    path: '/ulasim',
    subTitles: [
      { title: 'Deniz Yolu', path: '/deniz-yolu', img: shipImg },
      { title: 'Kara Yolu', path: 'kara-yolu', img: busImg },
      { title: 'Raylı Sistemler', path: 'rayli-sistemler', img: trainImg }
    ]
  },
  {
    expand: false,
    title: 'Kuleler',
    path: '/kuleler',
    subTitles: []
  },
  {
    expand: false,
    title: 'Sihirli Nesneler',
    path: '/sihirli-nesneler',
    subTitles: []
  },
  {
    expand: true,
    title: 'Aksesuarlar',
    path: '/aksesuarlar',
    subTitles: [
      { title: 'Saatler', path: '/saatler', img: watchImg },
      { title: 'Heykeller', path: 'heykeller', img: sculptureImg }
    ]
  }
];
