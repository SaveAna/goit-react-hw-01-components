import Profile from '../Profile/Profile';
import Statistics from '../Statictics/Statictics';
import FriendList from '../FriendsList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import user from '../../data/user';
import data from '../../data/data';
import friends from '../../data/friends';
import transactions from '../../data/transactions';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
