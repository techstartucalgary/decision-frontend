import PollPage from '@/components/PollPage/PollPage';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar/Navbar';
import NamePollPage from '../components/PollPage/NamePollPage';

import { useSelector } from 'react-redux';

export default function getPolls() {
  const router = useRouter();
  const { poll } = router.query;

  const has_name =
    useSelector((state) => state.formName.value).length === 0 ? false : true;
  return (
    <>
      <Navbar children />
      {has_name && <PollPage id={poll} />}
      {!has_name && <NamePollPage />}
    </>
  );
}
