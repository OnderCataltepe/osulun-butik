import bridgeImg from '../../assets/products/gatesAndBridges/bridges/bogazici/bogazici1.jpg';
import cityGateImg from '../../assets/products/gatesAndBridges/cityGates/ankara/konya/konya1.jpg';
import shipImg from '../../assets/products/transportation/seaway/vapur1.jpg';
import busImg from '../../assets/products/transportation/road/bus/bus1.jpg';
import trainImg from '../../assets/products/transportation/railway/marmaray/marmaray1.jpg';
import watchImg from '../../assets/products/accessories/watches/dolmabahceWatch/dolmabahce2.jpg';
import sculptureImg from '../../assets/products/accessories/sculptures/troya/troya1.jpg';
import towerBg from '../../assets/backgrounds/towersBg.jpg';

export const navPages = [
  {
    id: 0,
    expand: false,
    title: 'Anasayfa',
    path: 'home',
    category: ['asdad'],
    bgImg: trainImg,
    subTitles: [
      { id: 0, title: 'Tüm Ürünler', path: 'tum-gecitler', img: bridgeImg, category: ['geçit'] }
    ]
  },
  {
    id: 1,
    expand: true,
    title: 'Geçitler',
    path: 'gecitler',
    category: ['geçit'],
    bgImg: trainImg,
    subTitles: [
      { id: 0, title: 'Tüm Ürünler', path: 'tum-gecitler', img: bridgeImg, category: ['geçit'] },
      { id: 1, title: 'Köprüler', path: 'kopruler', img: bridgeImg, category: ['geçit', 'köprü'] },
      {
        id: 2,
        title: 'Şehir Kapıları',
        path: 'sehir-kapilari',
        img: cityGateImg,
        category: ['geçit', 'kapı']
      }
    ]
  },
  {
    id: 2,
    expand: true,
    title: 'Ulaşım',
    path: 'ulasim',
    category: ['ulaşım'],
    bgImg: trainImg,
    subTitles: [
      {
        id: 0,
        title: 'Tüm Ürünler',
        path: 'tum-ulasim',
        img: shipImg,
        category: ['ulaşım']
      },
      {
        id: 1,
        title: 'Deniz Yolu',
        path: 'deniz-yolu',
        img: shipImg,
        category: ['ulaşım', 'deniz']
      },
      { id: 2, title: 'Kara Yolu', path: 'kara-yolu', img: busImg, category: ['ulaşım', 'kara'] },
      {
        id: 3,
        title: 'Raylı Sistemler',
        path: 'rayli-sistemler',
        img: trainImg,
        category: ['ulaşım', 'ray']
      }
    ]
  },
  {
    id: 3,
    expand: false,
    title: 'Kuleler',
    path: 'kuleler',
    bgImg: towerBg,
    subTitles: [
      {
        id: 0,
        title: 'Tüm Ürünler',
        path: 'tum-kuleler',
        img: watchImg,
        category: ['kule']
      }
    ],
    category: ['kule']
  },
  {
    id: 4,
    expand: false,
    title: 'Sihirli Nesneler',
    path: 'sihirli-nesneler',
    bgImg: trainImg,
    subTitles: [
      {
        id: 0,
        title: 'Tüm Ürünler',
        path: 'tum-sihirli-nesneler',
        img: watchImg,
        category: ['sihirli']
      }
    ],
    category: ['sihirli']
  },
  {
    id: 5,
    expand: true,
    title: 'Aksesuarlar',
    path: 'aksesuarlar',
    category: ['aksesuar'],
    bgImg: trainImg,
    subTitles: [
      {
        id: 0,
        title: 'Tüm Ürünler',
        path: 'tum-aksesuarlar',
        img: watchImg,
        category: ['aksesuar', 'saat']
      },
      { id: 1, title: 'Saatler', path: 'saatler', img: watchImg, category: ['aksesuar', 'saat'] },
      {
        id: 2,
        title: 'Heykeller',
        path: 'heykeller',
        img: sculptureImg,
        category: ['aksesuar', 'heykel']
      }
    ]
  }
];
