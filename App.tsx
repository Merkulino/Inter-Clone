import React from 'react';
import UserProvider from './src/AppContext/UserProvider';
import AccountProvider from './src/AppContext/AccountProvider';
import Routes from './src';

function App(): JSX.Element {
  return (
    <UserProvider>
      <AccountProvider>
        <Routes />
      </AccountProvider>
    </UserProvider>
  );
}

export default App;
