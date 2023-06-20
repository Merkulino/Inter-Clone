import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Balance} from '../Components/Balance';
import {AccountContext} from '../AppContext/AccountProvider';
import {StateStyles} from '../Styles/Statement';

function BankStatement() {
  const {
    accountData: {debit, credit},
  } = useContext(AccountContext);
  const [statements, setStatement] = useState(debit.bankStatement);

  useEffect(() => {
    const newStatement = debit.bankStatement.concat(credit.bankStatement);
    newStatement.sort((a, b) => {
      return b.date - a.date;
    });
    setStatement(newStatement);
  }, [credit.bankStatement, debit.bankStatement]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={StateStyles.container}>
          <Balance />
        </View>
        {statements.length ? (
          statements.map((statment, i) => (
            <>
              <View
                style={StateStyles.content}
                key={`${i}-${Math.random() * 55}`}>
                <Text style={StateStyles.dateTxt}>
                  {statment.date.toString()}
                </Text>
                <View style={StateStyles.separator} />
                <View style={StateStyles.info}>
                  <Text style={StateStyles.txtBold}>{statment.pay}</Text>
                  <Text>
                    {statment.from} Pagou {statment.to}
                  </Text>
                  <Text>Utilizando {statment.account}</Text>
                  <Text style={StateStyles.txtBold}>
                    R$ {Number(statment.value).toFixed(2)}
                  </Text>
                </View>
              </View>
              <View />
            </>
          ))
        ) : (
          <Text style={StateStyles.emptyStatement}> Extrato vazio </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default BankStatement;
