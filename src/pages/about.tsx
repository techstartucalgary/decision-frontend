import Navbar from '../components/Navbar/Navbar';
import AboutInfo from '../components/About/AboutInfo';

import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Where To? | About</title>
        <meta
          name="description"
          content="Where To? is an app that helps you and your group of friends decide where to go out a little easier!"
        />
      </Head>
      <Navbar>
        <AboutInfo />
      </Navbar>
    </>
  );
}
