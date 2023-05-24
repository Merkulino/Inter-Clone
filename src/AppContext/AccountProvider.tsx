/* eslint-disable react/react-in-jsx-scope */
import {createContext, useState} from 'react';

type accountDataType = {
  account: string;
};

interface IAccountContext {
  accountData: accountDataType;
  setData?(data: accountDataType): any;
}

const defaultState = {
  accountData: {
    account: '',
  },
};

export const AccountContext = createContext<IAccountContext>(defaultState);

export default function UserProvider({children}: any): JSX.Element {
  const [accountData, setAccountData] = useState(defaultState.accountData);

  const setData = (data: any) => {
    setAccountData(data);
  };

  const context = {accountData, setData};

  return (
    <AccountContext.Provider value={context}>
      {children}
    </AccountContext.Provider>
  );
}
