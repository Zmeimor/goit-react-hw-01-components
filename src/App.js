import React from 'react';

import { Profile } from "./components/profil/profile";

import { Statistics } from './components/statistics/statistics';

import { FriendList } from "./components/frend/freindlist";

import { TransactionHistory } from 'components/transact/tranzaction';

import user from "data/user.json";

import data from "data/data.json";

import friends from "data/friends.json";

import transactions from "data/transactions.json";


// console.log(data[0])

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex-wrap',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />
    <Statistics title="Upload stats" statsDate={data} />
    <Statistics statsDate={data} /> 
      <FriendList friends={friends} />
    <TransactionHistory items={transactions} />  
    </div>
  );
};
