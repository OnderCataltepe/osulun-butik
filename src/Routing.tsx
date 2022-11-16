import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/products/Home';
import Gates from './pages/products/Gates';
import MagicalObjects from './pages/products/MagicalObjects';
import Towers from './pages/products/Towers';
import Transportation from './pages/products/Transportation';
import Accessories from './pages/products/Accessories';
import Faq from './pages/customer-guide/Faq';
import ReturnDelivery from './pages/customer-guide/ReturnDelivery';
import Privacy from './pages/customer-guide/Privacy';
import Partnerships from './pages/corporate/Partnership';
import SalesPoints from './pages/corporate/SalesPoints';
import Contacts from './pages/corporate/Contacts';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'gecitler',
        element: <Gates />
      },
      {
        path: 'sihirli-nesneler',
        element: <MagicalObjects />
      },
      {
        path: 'kuleler',
        element: <Towers />
      },
      {
        path: 'ulasim',
        element: <Transportation />
      },
      {
        path: 'aksesuarlar',
        element: <Accessories />
      },
      {
        path: 'sikca-sorulan-sorular',
        element: <Faq />
      },
      {
        path: 'iade-ve-degisim',
        element: <ReturnDelivery />
      },
      {
        path: 'gizlilik-politikasi',
        element: <Privacy />
      },
      {
        path: 'ortakliklar',
        element: <Partnerships />
      },
      {
        path: 'satis-noktalarimiz',
        element: <SalesPoints />
      },
      {
        path: 'iletisim',
        element: <Contacts />
      }
    ]
  }
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
