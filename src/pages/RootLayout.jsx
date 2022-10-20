import { Outlet } from 'react-router-dom';

// import MainNavigation from './MainNavigation';
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default RootLayout;
