import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

function Login({props}: any) {
  return (
    <SafeAreaView>
      <View>
        <Text> Login Page! </Text>
        <Button title="Home Page" onPress={() => props.navigate('Home')} />
      </View>
    </SafeAreaView>
  );
}

export default Login;
