import { Outlet } from 'react-router';
import Footer from './Footer';
import Navigation from './nav_bar';

const LayOut = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayOut;
