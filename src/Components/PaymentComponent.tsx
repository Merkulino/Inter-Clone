/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import MaskInput, {Masks} from 'react-native-mask-input';
import {Text} from 'react-native';
import {primaryColor} from '../Styles/App';

const PaymentComponent = () => {
  // Receber via prop: Value, SetValue, 'Pagar para'
  const [mask, setMask] = React.useState('');

  return (
    <View style={styles.component}>
      <MaskInput
        style={styles.txtInput}
        placeholder="R$ 0,00"
        placeholderTextColor={primaryColor}
        keyboardType="numeric"
        value={mask}
        onChangeText={masked => setMask(masked)}
        mask={Masks.BRL_CURRENCY}
      />
      <Text style={{fontSize: 13}}>Pagar Para</Text>
      <Text style={{fontSize: 18, fontWeight: '900'}}>PESSOA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    alignSelf: 'center',
    alignItems: 'center',
    gap: 15,
    // minWidth: 200,
  },
  txtInput: {
    borderBottomWidth: 1,
    paddingBottom: 0,
    fontWeight: '600',
    fontSize: 20,
    minWidth: 80,
    color: primaryColor,
  },
});

export {PaymentComponent};
