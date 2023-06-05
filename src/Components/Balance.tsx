import {View} from 'react-native';
import React, {useContext} from 'react';
import {Text} from 'react-native';
import {appStyles} from '../Styles/App';
import {AccountContext} from '../AppContext/AccountProvider';

const Balance = () => {
  const {
    accountData: {debit},
  } = useContext(AccountContext);

  return (
    <View style={appStyles.balanceContent}>
      <Text>Saldo em conta</Text>
      <Text>R$ {debit.balance}</Text>
    </View>
  );
};

export {Balance};
