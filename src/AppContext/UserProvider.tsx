/* eslint-disable react/react-in-jsx-scope */
import {createContext, useState} from 'react';

type usrTypeData = {
  password: string;
};

interface IUserContext {
  userData: usrTypeData;
  setUser?(data: usrTypeData): any;
}

const defaultState = {
  userData: {
    password: '',
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
