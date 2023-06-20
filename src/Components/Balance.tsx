/* eslint-disable react-hooks/exhaustive-deps */
import {View} from 'react-native';
import React, {useCallback, useContext} from 'react';
import {Text} from 'react-native';
import {appStyles} from '../Styles/App';
import {AccountContext} from '../AppContext/AccountProvider';
import DebitAccount from '../BankSystem/Account/DebitAccount';
import CreditAccount from '../BankSystem/Account/CreditAccount';
import {Picker} from '@react-native-picker/picker';
import Account from '../BankSystem/Account/Account';
import {useFocusEffect} from '@react-navigation/native';

const Balance = () => {
  const {
    accountData: {debit, credit},
    currentAccount,
    setCurrent,
  } = useContext(AccountContext);

  useFocusEffect(
    useCallback(() => {
      if (setCurrent) {
        return setCurrent(debit);
      }
    }, []),
  );

  return (
    <>
      <View style={appStyles.balanceContent}>
        {currentAccount instanceof DebitAccount && (
          <>
            <Text>Saldo em conta débito</Text>
            <Text>R$ {currentAccount.balance}</Text>
          </>
        )}
        {currentAccount instanceof CreditAccount && (
          <>
            <Text>Saldo em conta crédito</Text>
            <Text>R$ {currentAccount.creditLimit.creditAvaliable()}</Text>
          </>
        )}
      </View>
      <View>
        <Picker
          selectedValue={currentAccount}
          onValueChange={val => {
            // Precisei fazer essa validação por problema nas tipagens
            if (setCurrent) {
              return setCurrent(val);
            }
          }}>
          <Picker.Item value={debit as Account} label="Débito" />
          <Picker.Item value={credit as Account} label="Crédito" />
        </Picker>
      </View>
    </>
  );
};

export {Balance};
