import React, {useContext} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {PrimaryButton} from '../Components/Button';
import {creditStyle} from '../Styles/Credit';
import {AccountContext} from '../AppContext/AccountProvider';

function CreditCard() {
  const {
    accountData: {
      credit: {creditLimit},
    },
  } = useContext(AccountContext);

  return (
    <SafeAreaView style={creditStyle.container}>
      <View
        style={{...creditStyle.cardContainer, ...creditStyle.limitContainer}}>
        <View>
          <Text>LIMITE TOTAL {creditLimit.limit}</Text>
        </View>
        <Text>Barra de utilizado</Text>
        <View>
          <Text>Utilizado {creditLimit.usage}</Text>
          <Text>Disponivel {creditLimit.creditAvaliable()}</Text>
        </View>
      </View>
      <View
        style={{...creditStyle.cardContainer, ...creditStyle.billContainer}}>
        <View>
          <Text>Próxima Fatura</Text>
        </View>
        <View>
          <Text>Mês da fatura: {creditLimit.dateCloseBill()}</Text>
          {creditLimit.status ? <Text>Aberta</Text> : <Text>Fechada</Text>}
          <Text>Dia de vencimento: {creditLimit.closeBill.toString()}</Text>
        </View>
      </View>
      <PrimaryButton title="Mostrar todas as compras" />
    </SafeAreaView>
  );
}

export default CreditCard;
