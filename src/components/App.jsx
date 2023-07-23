import React from 'react';
import Profile from 'components/Profile/profile';
import Statistics from 'components/Statistics/statistics';
import FriendList from 'components/FriendList/friends';
import Transactions from 'components/TransactionHistory/transactionHistory';

const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <Transactions />
    </div>
  );
};

export default App;