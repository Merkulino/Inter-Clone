import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Balance} from '../Components/Balance';
import {AccountContext} from '../AppContext/AccountProvider';

function BankStatement() {
  const {
    accountData: {debit},
  } = useContext(AccountContext);
  // console.log(debit.bankStatement[0].to);

  // Concertar como retorno o statement no momento de pagamento, ta ruim pra pegar aqui

  return (
    <SafeAreaView>
      <ScrollView>
        <Balance />
        {debit.bankStatement.length ? (
          debit.bankStatement.map((statment, i) => (
            <>
              <View key={`${i}-${Math.random() * 55}`}>
                <Text>{statment.date.toString()}</Text>
                <View>
                  <Text>{statment.pay}</Text>
                  <Text>
                    {statment.from} Pagou {statment.to}
                  </Text>
                  <Text>Valor: {statment.value}</Text>
                </View>
              </View>
              <View />
            </>
          ))
        ) : (
          <Text> Extrato vazio </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default BankStatement;
