import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {NavigationScreenProp} from '../types';

function Login({navigation}: NavigationScreenProp) {
  return (
    <SafeAreaView>
      <View>
        <Text> Login Page! </Text>
        <Button title="Home Page" onPress={() => navigation.navigate('Home')} />
      </View>
    </SafeAreaView>
  );
}

export default Login;
