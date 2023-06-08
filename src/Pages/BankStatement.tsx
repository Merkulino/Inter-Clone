import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Balance} from '../Components/Balance';
import {AccountContext} from '../AppContext/AccountProvider';

function BankStatement() {
  const {
    accountData: {debit, credit},
  } = useContext(AccountContext);
  const [statements, setStatement] = useState(debit.bankStatement);

  useEffect(() => {
    const newStatement = debit.bankStatement.concat(credit.bankStatement);
    newStatement.sort((a, b) => {
      console.log(b.date);
      return b.date - a.date;
    });
    setStatement(newStatement);
  }, [credit.bankStatement, debit.bankStatement]);

  console.log(statements);
  return (
    <SafeAreaView>
      <ScrollView>
        <Balance />
        {statements.length ? (
          statements.map((statment, i) => (
            <>
              <View key={`${i}-${Math.random() * 55}`}>
                <Text>{statment.date.toString()}</Text>
                <View>
                  <Text>{statment.pay}</Text>
                  <Text>
                    {statment.from} Pagou {statment.to}
                  </Text>
                  <Text>Utilizando {statment.account}</Text>
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
