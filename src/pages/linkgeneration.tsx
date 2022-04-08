import Navbar from '../components/Navbar/Navbar';
import LinkGenerationPage from '../components/LinkGenerationPage/LinkGenerationPage';
import Head from 'next/head';

export default function LinkGeneration() {
  return (
    <>
      <Head>
        <title>Where To? | Share With Friends!</title>
        <meta
          name="description"
          content="Where To? is an app that helps you and your group of friends decide where to go out a little easier!"
        />
      </Head>
      <Navbar>Children</Navbar>
      <LinkGenerationPage />
    </>
  );
}
