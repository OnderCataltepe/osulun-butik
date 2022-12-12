// Components
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Loading from '../pages/loading/Loading';
// Firebase
import { auth, db, getDoc, doc, onAuthStateChanged, updateDoc } from '../firebase/config';
// React router
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
// hooks and reducer functions
import { useAppDispatch, useAppSelector } from '../redux/hooks/reduxHooks';
import { login, logout, userBasket } from '../redux/reducers/userSlice';
import { getProducts } from '../redux/reducers/productSlice';
import { useEffect, useState } from 'react';
import { updateBasket } from '../utils';
// Types
import type { BasketType } from '../types/types';

const Layout = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.values);
  const isLoading = useAppSelector((state) => state.product.loading);
  const user = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getProducts());
    onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const docRef = doc(db, 'users', `${userAuth.uid}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          localStorage.setItem('isAuthenticated', 'true');

          dispatch(login({ ...docSnap.data() }));
        }
      } else {
        localStorage.setItem('isAuthenticated', 'false');
        dispatch(logout());
      }
    });
  }, []);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (user.isAuth) {
      const guestBasket = localStorage.getItem('basket');
      const newArr = [...user.values.basket];
      if (guestBasket) {
        JSON.parse(guestBasket).forEach(async (item: BasketType) => {
          const newBasket = updateBasket(newArr, item, products);
          newArr.splice(0, newArr.length, ...newBasket);
          const basRef = doc(db, 'users', user.values.uid);
          await updateDoc(basRef, { basket: newArr });
          dispatch(userBasket(newArr));
          console.log(newArr);
        });
        localStorage.removeItem('basket');
      }
    }
  }, [user.isAuth]);

  return (
    <div
      style={{
        minHeight: '100vh',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Navbar />
      {isLoading && <Loading />}
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
