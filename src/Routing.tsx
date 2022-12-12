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
import UserBasket from './pages/user/customer/UserBasket';
import Press from './pages/corporate/Press';
import ErrorPage from './pages/error/ErrorPage';
import OurStory from './pages/corporate/OurStory';
import Settings from './pages/user/admin/Settings';
import InnerCategory from './pages/products/InnerCategory';
import UserSettings from './pages/user/customer/UserSettings';
import DetailedCard from './components/cards/DetailedCard';
import { useAppSelector } from './redux/hooks/reduxHooks';
import QueryProducts from './pages/products/QueryProducts';

const ProtectedRoute = () => {
  const user = useAppSelector((state) => state.user);

  if (!user.isAuth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
const AdminRoute = () => {
  const user = useAppSelector((state) => state.user);

  if (!user.isAuth || user.values.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        element: <ProtectedRoute />,
        children: [{ path: 'user/settings', element: <UserSettings /> }]
      },
      {
        element: <AdminRoute />,
        children: [{ path: 'admin/settings', element: <Settings /> }]
      },
      { path: 'user/sepetim', element: <UserBasket /> },
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
        path: 'admin/settings',
        element: <Settings />
      },
      {
        path: 'search/:searchId',
        element: <QueryProducts />
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
