import LandingPage from '@/components/LandingPage/LandingPage';
import Head from 'next/head';
import SidebarWithHeader from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Where To?</title>
        <meta
          name="description"
          content="Where To? is an app that helps you and your group of friends decide where to go out a little easier!"
        />
      </Head>
      <SidebarWithHeader>Children</SidebarWithHeader>
      <LandingPage />
    </>
  );
}
