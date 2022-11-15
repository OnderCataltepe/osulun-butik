import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';

const Layout = (): JSX.Element => {
  return (
    <div
      style={{
        minHeight: '100vh',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
