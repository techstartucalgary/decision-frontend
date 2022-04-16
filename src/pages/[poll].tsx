import PollPage from '@/components/PollPage/PollPage';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar/Navbar';
import { useCookies } from 'react-cookie';
import UserPollPage from '@/components/PollPage/UserPollPage';
import Head from 'next/head';
import useSWR, { mutate } from 'swr';
import { setFormBudget } from '../slices/formBudgetSlice';
import { setFormName } from '../slices/formNameSlice';
import { toggleInterest } from '../slices/formInterestsSlice';
import { useAppSelector, useAppDispatch } from '../hooks';

const navFetcher = (...args: [any]) => fetch(...args).then((res) => res.json());

export default function GetPolls() {
  const [cookies, setCookie] = useCookies();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { poll } = router.query;
  const { data, error } = useSWR(
    `https://decision-backend-heroku.herokuapp.com/${poll}`,
    navFetcher,
  );

  if (!data) {
  } else {
    dispatch(setFormBudget(data.budget[0]));
    dispatch(toggleInterest(data.activities));
    dispatch(setFormName(data.names[0]));
    console.log(data);
  }
  return (
    <>
      <Head>
        <title>Where To? | Time to Decide</title>
        <meta
          name="description"
          content="Where To? is an app that helps you and your group of friends decide where to go out a little easier!"
        />
      </Head>
      <Navbar>
        {cookies.userID ? ( // if user is already registered as user or creator poll page will be rendered, otherwise they have to register first for their cookie to be created
          <PollPage id={poll} />
        ) : (
          <UserPollPage id={poll} />
        )}
      </Navbar>
    </>
  );
}
