import { RouterProvider, createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/home/Home';
import Category from './pages/products/Category';
import Faq from './pages/customer-guide/Faq';
import ReturnDelivery from './pages/customer-guide/ReturnDelivery';
import Privacy from './pages/customer-guide/Privacy';
import Partnerships from './pages/corporate/Partnership';
import SalesPoints from './pages/corporate/SalesPoints';
import Contacts from './pages/corporate/Contacts';
import Press from './pages/corporate/Press';
import OurStory from './pages/corporate/OurStory';
import Settings from './pages/user/admin/Settings';
import InnerCategory from './pages/products/InnerCategory';
import UserSettings from './pages/user/UserSettings';
import DetailedCard from './components/cards/DetailedCard';
import { useAppSelector } from './redux/hooks/reduxHooks';
import { useEffect } from 'react';
const ProtectedRoute = () => {
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    console.log(user);
  }, []);

  if (!user.isAuth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        element: <ProtectedRoute />,
        children: [{ path: 'settings', element: <UserSettings /> }]
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
      },
      {
        path: 'basinda-biz',
        element: <Press />
      },
      {
        path: 'hikayemiz',
        element: <OurStory />
      },
      {
        path: 'user/settings',
        element: <Settings />
      },
      { path: '/urun/:detailedId', element: <DetailedCard /> },
      {
        path: 'kategori/:multiId',
        element: <Category />,
        children: [
          {
            path: ':innerId',
            element: <InnerCategory />
          }
        ]
      }
    ]
  }
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
