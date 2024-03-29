/* eslint-disable react/react-in-jsx-scope */
import {createContext, useState} from 'react';
import DebitAccount from '../BankSystem/Account/DebitAccount';
import User from '../BankSystem/User';
import CreditAccount from '../BankSystem/Account/CreditAccount';

const user = new User(1, 'Melqui Brito', 'user@user.com', '1234567890'); // Depois apaga
const debitAccount = new DebitAccount({id: 1, _user: user}, 200); // Apenas para desenvolvimento
const creditAccount = new CreditAccount({id: 1, _user: user}); // Apenas para desenvolvimento

type accountDataType = {
  debit: DebitAccount; // Esse tipo tem que vim de uma interface, vai que tem um método abstrato...
  credit: CreditAccount;
};

interface IAccountContext {
  accountData: accountDataType;
  setData?(data: accountDataType): any;
  currentAccount: DebitAccount | CreditAccount;
  setCurrent?(data: DebitAccount | CreditAccount): any;
}

const defaultState = {
  accountData: {
    debit: debitAccount,
    credit: creditAccount,
  },
  currentAccount: debitAccount,
};

export const AccountContext = createContext<IAccountContext>(defaultState);

export default function AccountProvider({children}: any): JSX.Element {
  const [accountData, setAccountData] = useState(defaultState.accountData);
  const [currentAccount, setCurrentAccount] = useState(debitAccount);

  const setData = (data: any) => {
    setAccountData(data);
  };

  const setCurrent = (data: any) => {
    setCurrentAccount(data);
  };

  const context = {accountData, setData, currentAccount, setCurrent};

  return (
    <AccountContext.Provider value={context}>
      {children}
    </AccountContext.Provider>
  );
}
