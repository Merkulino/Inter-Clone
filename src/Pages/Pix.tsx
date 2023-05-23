/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View, TextInput} from 'react-native';
import {pixStyle} from '../Styles/Pix';
import {appStyles} from '../Styles/App';
import {PrimaryButton} from '../Components/Button';
import {PaymentComponent} from '../Components/PaymentComponent';

function Pix() {
  return (
    <SafeAreaView style={pixStyle.container}>
      <View style={pixStyle.header}>
        <View style={appStyles.balanceContent}>
          {
            // Componentizar balance
          }
          <Text>Saldo em conta</Text>
          <Text>R$ 99,99</Text>
        </View>
        <View>
          <Text style={{fontWeight: '700'}}> Chave </Text>
          {
            // MaskInput
          }
          <TextInput
            placeholder="CPF, CNPJ, celular, e-mail ou aleatória"
            style={appStyles.textInput}
          />
        </View>
        <PaymentComponent />
      </View>
      <PrimaryButton title="Pagar" />
    </SafeAreaView>
  );
}

export default Pix;
