import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {NavigationScreenProp} from '../types';

function Investment({navigation}: NavigationScreenProp) {
  return (
    <SafeAreaView>
      <View>
        <Text> Investment Page! </Text>
        <Button
          title="Investir em CDB"
          onPress={() => navigation.navigate('InvestmentDetails')}
        />
        <Button
          title="Investir em LCI"
          onPress={() => navigation.navigate('InvestmentDetails')}
        />
        <Button
          title="Investir em CRI"
          onPress={() => navigation.navigate('InvestmentDetails')}
        />
      </View>
    </SafeAreaView>
  );
}

export default Investment;
