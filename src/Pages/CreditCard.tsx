/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {PrimaryButton} from '../Components/Button';
import {creditStyle} from '../Styles/Credit';
import {AccountContext} from '../AppContext/AccountProvider';
import {appStyles} from '../Styles/App';

function CreditCard() {
  const {
    accountData: {
      credit: {creditLimit},
    },
  } = useContext(AccountContext);
  const usagePorcent = `${(
    (creditLimit.usage * 100) /
    creditLimit.limit
  ).toString()}%`;

  return (
    <SafeAreaView style={creditStyle.container}>
      <View
        style={{...creditStyle.cardContainer, ...creditStyle.limitContainer}}>
        <View style={creditStyle.limit}>
          <Text style={{...appStyles.fontBold, fontSize: 15}}>
            Limite Total
          </Text>
          <Text style={{fontWeight: '600', fontSize: 22}}>
            R$ {Number(creditLimit.limit).toFixed(2)}
          </Text>
        </View>
        <View style={creditStyle.progressBarContainer}>
          <View
            style={{
              ...creditStyle.progressBar,
              width: usagePorcent,
            }}
          />
        </View>
        <View style={creditStyle.usageInfo}>
          <Text>Utilizado R$ {Number(creditLimit.usage).toFixed(2)}</Text>
          <Text>
            Disponivel R$ {Number(creditLimit.creditAvaliable()).toFixed(2)}
          </Text>
        </View>
      </View>
      <View>
        <Text>Próxima Fatura</Text>
      </View>
      <View
        style={{...creditStyle.cardContainer, ...creditStyle.billContainer}}>
        <View>
          <View style={creditStyle.headerBill}>
            <Text>Mês da fatura: {creditLimit.dateCloseBill()}</Text>
            {creditLimit.status ? <Text>Aberta</Text> : <Text>Fechada</Text>}
            <Text style={{...appStyles.fontBold, fontSize: 20, color: 'black'}}>
              R$ {Number(creditLimit.usage).toFixed(2)}
            </Text>
          </View>
        </View>
        <View style={creditStyle.footerBill}>
          <Text>Dia de vencimento</Text>
          <Text style={appStyles.fontBold}>
            {creditLimit.closeBill.toString()}
          </Text>
        </View>
      </View>
      <PrimaryButton title="Mostrar todas as compras" />
    </SafeAreaView>
  );
}

export default CreditCard;
