/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useContext, useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {NavigationScreenProp} from '../types';
import {homeStyle} from '../Styles/Home';
import {IconButtonSelector} from '../Components/Button';
import {AccountContext} from '../AppContext/AccountProvider';
import {useFocusEffect} from '@react-navigation/native';

function Home({navigation}: NavigationScreenProp) {
  const {
    accountData: {debit},
  } = useContext(AccountContext);
  const [balance, setBalance] = useState(debit.balance.toFixed(2));

  useFocusEffect(
    useCallback(() => {
      setBalance(debit.balance.toFixed(2));
    }, [debit]),
  );

  return (
    <SafeAreaView style={homeStyle.container}>
      <View style={homeStyle.header}>
        <Image
          style={homeStyle.smallLogo}
          source={require('../Styles/Assets/logobancointer.png')}
        />
        <Text
          style={{fontWeight: '900'}}
          onPress={() => navigation.navigate('Profile')}>
          PERFIL
        </Text>
      </View>
      <View style={homeStyle.valueSection}>
        <Text> R$ {balance} </Text>
        <Text
          style={{fontWeight: '900'}}
          onPress={() => navigation.navigate('BankStatement')}>
          Ver extrato
        </Text>
      </View>
      <View style={homeStyle.btnSection}>
        <IconButtonSelector
          title="Crédito"
          navigation={navigation}
          page="CreditCard"
        />
        <IconButtonSelector
          title="PIX"
          navigation={navigation}
          page="PaymentPIX"
        />
        <IconButtonSelector
          title="Investir"
          navigation={navigation}
          page="Investment"
        />
        <IconButtonSelector
          title="Boleto"
          navigation={navigation}
          page="BankLipPayment"
        />
        <IconButtonSelector
          title="Transferências"
          navigation={navigation}
          page="PaymentTED"
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
