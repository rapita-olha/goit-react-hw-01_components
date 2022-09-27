import Section from './components/Section/Section';

import Profile from './components/Profile/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

const App = () => (
  <div>
    <Section>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Section>

    <Statistics title="Upload stats" stats={statisticalData}></Statistics>
    <Statistics stats={statisticalData} />

    <Section>
      <FriendList friends={friends} />
    </Section>

    <Section>
      <TransactionHistory items={transactions} />
    </Section>
  </div>
);

export default App;
