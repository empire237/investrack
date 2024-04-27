import { Outlet } from 'react-router';
import Footer from './Footer';
import NavBar from './NavBar';
// import HomeContent from './HomeContent';

function AppLayout() {
  return (
    <>
      <NavBar />

      <main className={''}>
        <Outlet />
      </main>
    </>
  );
}
// Nothing

export default AppLayout;
