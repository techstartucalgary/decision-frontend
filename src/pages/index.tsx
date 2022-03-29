import LandingPage from '@/components/LandingPage/LandingPage';

import SidebarWithHeader from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <SidebarWithHeader children />

      <LandingPage />
    </>
  );
}
