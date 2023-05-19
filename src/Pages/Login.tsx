import React, {useState} from 'react';
import {SafeAreaView, Text, View, Button, TextInput, Image} from 'react-native';
import {NavigationScreenProp} from '../types';
import {appStyles, primaryColor} from '../Styles/App';
import {loginStyle} from '../Styles/Login';

function Login({navigation}: NavigationScreenProp) {
  const [accNum, setAccNum] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={loginStyle.container}>
      <Image
        source={require('../Styles/Assets/logobancointer.png')}
        style={loginStyle.smallLogo}
      />
      <View style={loginStyle.formView}>
        <Text>Conta</Text>
        <TextInput
          style={appStyles.textInput}
          placeholder="Digite o numero da conta"
          value={accNum}
          onChange={() => setAccNum}
        />

        <Text>Senha</Text>
        <TextInput
          style={appStyles.textInput}
          placeholder="Digite sua senha"
          value={password}
          onChange={() => setPassword}
        />

        <View style={appStyles.primaryButton}>
          <Button
            title="Entrar"
            color={primaryColor}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
