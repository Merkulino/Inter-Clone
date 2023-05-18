/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {NavigationScreenProp} from '../types';

function Home({navigation}: NavigationScreenProp) {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text> Home Page! </Text>
          <Text
            style={{fontWeight: '900'}}
            onPress={() => navigation.navigate('Profile')}>
            PERFIL
          </Text>
          <Text
            style={{fontWeight: '800'}}
            onPress={() => navigation.navigate('BankStatement')}>
            EXTRATO!
          </Text>
        </View>
      </SafeAreaView>
      <View>
        <Button
          title="Cartão de Crédito"
          onPress={() => navigation.push('CreditCard')}
        />
        <Button
          title="Investimentos"
          onPress={() => navigation.navigate('Investment')}
        />
        <Button title="PIX" onPress={() => navigation.navigate('PaymentPIX')} />
        <Button
          title="Transferências"
          onPress={() => navigation.navigate('PaymentTED')}
        />
        <Button
          title="Boletos"
          onPress={() => navigation.navigate('BankLipPayment')}
        />
      </View>
    </>
  );
}

export default Home;
