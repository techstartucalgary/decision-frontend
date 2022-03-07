import PollPage from '@/components/PollPage/PollPage';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar/Navbar';

export default function getPolls() {
    const router = useRouter()
    const { poll } = router.query
  return (
      <>
  <Navbar children />
  <PollPage id={poll}/>
  </>
     );
}