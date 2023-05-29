/* eslint-disable react/react-in-jsx-scope */
import {createContext, useState} from 'react';
import User from '../BankSystem/Interfaces/IUser';

interface IUserContext {
  userData: User;
  setUser?(data: User): any;
}

const defaultState = {
  userData: {
    id: 0,
    name: '',
    mail: '',
    cpf: '',
  },
};

export const UserContext = createContext<IUserContext>(defaultState);

export default function UserProvider({children}: any): JSX.Element {
  const [userData, setUserData] = useState(defaultState.userData);

  const setUser = (data: any) => {
    setUserData(data);
  };

  const context = {userData, setUser};

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}
