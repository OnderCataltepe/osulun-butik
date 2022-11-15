import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Gates from './pages/Gates';
import MagicalObjects from './pages/MagicalObjects';
import Towers from './pages/Towers';
import Transportation from './pages/Transportation';
import Accessories from './pages/Accessories';
import Faq from './pages/corporate/Faq';
import ReturnDelivery from './pages/corporate/ReturnDelivery';
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
      { path: 'sikca-sorulan-sorular', element: <Faq /> },
      { path: 'iade-ve-degisim', element: <ReturnDelivery /> }
    ]
  }
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
