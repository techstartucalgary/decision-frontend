import PollPage from '@/components/PollPage/PollPage';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar/Navbar';
import { useCookies } from 'react-cookie';
import UserPollPage from '@/components/PollPage/UserPollPage';

export default function getPolls() {
  const [cookies, setCookie] = useCookies();
  const router = useRouter();
  const { poll } = router.query;
  return (
    <>
      <Navbar children />
      {cookies.creator || cookies.user ? ( // if user is already registered as user or creator poll page will be rendered, otherwise they have to register first for their cookie to be created
        <PollPage id={poll} />
      ) : (
        <UserPollPage id={poll} />
      )}
    </>
  );
}
