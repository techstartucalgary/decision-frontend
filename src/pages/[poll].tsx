import PollPage from '@/components/PollPage/PollPage';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar/Navbar';
import { useCookies } from 'react-cookie';
import UserPollPage from '@/components/PollPage/UserPollPage';
import Head from 'next/head';

export default function GetPolls() {
  const [cookies, setCookie] = useCookies();
  const router = useRouter();
  const { poll } = router.query;
  return (
    <>
      <Head>
        <title>Where To? | Time to Decide</title>
        <meta
          name="description"
          content="Where To? is an app that helps you and your group of friends decide where to go out a little easier!"
        />
      </Head>
      <Navbar>Children</Navbar>
      {cookies.userID ? ( // if user is already registered as user or creator poll page will be rendered, otherwise they have to register first for their cookie to be created
        <PollPage id={poll} />
      ) : (
        <UserPollPage id={poll} />
      )}
    </>
  );
}
