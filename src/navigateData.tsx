import bridgeImg from './assets/subMenu/bridge.png';
import cityGateImg from './assets/subMenu/cityGate.png';
import shipImg from './assets/subMenu/ship.png';
import busImg from './assets/subMenu/bus.png';
import trainImg from './assets/subMenu/train.png';
import clockImg from './assets/subMenu/clock.png';
import sculptureImg from './assets/subMenu/sculpture.png';
import towerBg from './assets/backgrounds/towersBg.jpg';
import gatesBg from './assets/backgrounds/gatesBg.jpg';
import accessoriesBg from './assets/backgrounds/accessoriesBg.jpg';
import magicBg from './assets/backgrounds/magicBg.jpg';
import transportationBg from './assets/backgrounds/transportationBg.jpg';

import type { NavType } from './types/types';

export const navData: NavType[] = [
  {
    id: 0,
    expand: true,
    title: 'GEÇİTLER',
    path: 'gecitler',
    category: ['geçit'],
    bgImg: gatesBg,
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
    id: 1,
    expand: true,
    title: 'ULAŞIM',
    path: 'ulasim',
    category: ['ulaşım'],
    bgImg: transportationBg,
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
    id: 2,
    expand: false,
    title: 'KULELER',
    path: 'kuleler',
    bgImg: towerBg,
    subTitles: [
      {
        id: 0,
        title: 'Tüm Ürünler',
        path: 'tum-kuleler',
        img: clockImg,
        category: ['kule']
      }
    ],
    category: ['kule']
  },
  {
    id: 3,
    expand: false,
    title: 'SİHİRLİ NESNELER',
    path: 'sihirli-nesneler',
    bgImg: magicBg,
    subTitles: [
      {
        id: 0,
        title: 'Tüm Ürünler',
        path: 'tum-sihirli-nesneler',
        img: clockImg,
        category: ['sihirli']
      }
    ],
    category: ['sihirli']
  },
  {
    id: 4,
    expand: true,
    title: 'AKSESUARLAR',
    path: 'aksesuarlar',
    category: ['aksesuar'],
    bgImg: accessoriesBg,
    subTitles: [
      {
        id: 0,
        title: 'Tüm Ürünler',
        path: 'tum-aksesuarlar',
        img: clockImg,
        category: ['aksesuar']
      },
      { id: 1, title: 'Saatler', path: 'saatler', img: clockImg, category: ['aksesuar', 'saat'] },
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
