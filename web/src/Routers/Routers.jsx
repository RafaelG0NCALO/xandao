import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading.jsx';

const Home = lazy(() => import('../Pages/Home'));
const Contato = lazy(() => import('../Pages/Contato'));

const Routers = () => {
  const [isLoadingHome, setIsLoadingHome] = useState(true);
  const [isLoadingContato, setIsLoadingContato] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const delay = setTimeout(() => {
      if (location.pathname === '/') {
        setIsLoadingHome(false);
      } else if (location.pathname === '/contato'){
        setIsLoadingContato(false)
      }
    }, 2000);
    return () => clearTimeout(delay);
  }, [location.pathname]);

  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route
          path="/"
          element={<Suspense fallback={<Loading />}>{isLoadingHome ? <Loading /> : <Home />}</Suspense>} />
        <Route
          path="contato"
          element={<Suspense fallback={<Loading />}>{isLoadingContato ? <Loading /> : <Contato />}</Suspense>} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
