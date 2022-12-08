import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
import { auth, db, getDoc, doc, onAuthStateChanged } from '../firebase/config';
import { useAppDispatch } from '../redux/hooks/reduxHooks';
import { login, logout } from '../redux/reducers/userSlice';
import { useEffect } from 'react';
const Layout = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const docRef = doc(db, 'users', `${userAuth.uid}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log('Document data:', { ...docSnap.data() });
          localStorage.setItem('isAuthenticated', 'true');

          dispatch(login({ ...docSnap.data() }));
        } else {
          console.log('No such document!');
        }
      } else {
        localStorage.setItem('isAuthenticated', 'false');

        dispatch(logout());
      }
    });
    console.log('page loaded');
  }, []);
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
