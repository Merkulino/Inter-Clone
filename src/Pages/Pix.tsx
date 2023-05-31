/* eslint-disable curly */ // Desativar no projeto
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {SafeAreaView, Text, View, TextInput} from 'react-native';
import {pixStyle} from '../Styles/Pix';
import {appStyles} from '../Styles/App';
import {PrimaryButton} from '../Components/Button';
import {PaymentComponent} from '../Components/PaymentComponent';
import {AccountContext} from '../AppContext/AccountProvider';
import {Alert} from 'react-native';
import PixPayment from '../BankSystem/Payment/PixPayment';
import User from '../BankSystem/User';
import DebitAccount from '../BankSystem/Account/DebitAccount';

// Criando um outra conta generica para desenvolvimento / Deixar global
const otherUser = new User(2, 'Pessoa', 'pessoa@pess.com', '1234567890');
const otherDebitAccount = new DebitAccount({id: 2, _user: otherUser}, 20);

function Pix() {
  const {
    accountData: {debit},
  } = useContext(AccountContext);
  const [balance, setBalance] = useState(debit.balance.toFixed(2));
  const [valueInput, setValue] = useState('');

  const validBalance = (value: number) => {
    if (!value) {
      return {title: 'Valor invalido', message: 'Adicione um valor valido'};
    }
    if (value > debit.balance) {
      return {
        title: 'Valor invalido',
        message: 'Não há saldo suficiente para realizar esse pagamento',
      };
    }
    return null;
  };

  const makePayment = () => {
    const value = Number(valueInput.replace(/[R$.]/gi, '').replace(',', '.'));
    const valid = validBalance(value);
    if (valid) return Alert.alert(valid.title, valid.message);
    try {
      const pix = new PixPayment({
        fromAccount: debit,
        toAccount: otherDebitAccount,
        value,
      });

      debit.send(value, pix);
      setBalance(debit.balance.toFixed(2));
      Alert.alert('Pagamento realizado!');
      setValue('');
    } catch (error) {
      Alert.alert('Erro ao enviar pix', `Error: ${error}`);
    }
  };

  return (
    <SafeAreaView style={pixStyle.container}>
      <View style={pixStyle.header}>
        <View style={appStyles.balanceContent}>
          {
            // Componentizar balance
          }
          <Text>Saldo em conta</Text>
          <Text>R$ {balance}</Text>
        </View>
        <View>
          <Text style={{fontWeight: '700'}}> Chave </Text>
          <TextInput
            placeholder="CPF, CNPJ, celular, e-mail ou aleatória"
            style={appStyles.textInput}
          />
        </View>
        <PaymentComponent valueInput={valueInput} setValue={setValue} />
      </View>
      <PrimaryButton title="Pagar" btnFunction={makePayment} />
    </SafeAreaView>
  );
}

export default Pix;
