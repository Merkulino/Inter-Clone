import React, {useState} from 'react';
import {SafeAreaView, Text, View, TextInput, Image} from 'react-native';
import {NavigationScreenProp} from '../types';
import {appStyles} from '../Styles/App';
import {loginStyle} from '../Styles/Login';
import {PrimaryNavigationBtn} from '../Components/Button';

function Login({navigation}: NavigationScreenProp) {
  const [accNum, setAccNum] = useState('');
  const [password, setPassword] = useState('');

  // const handleChange = (setState: (arg0: any) => void) => (event) => {
  //   setState(event.);
  // };

  return (
    <SafeAreaView style={loginStyle.container}>
      <Image
        source={require('../Styles/Assets/logobancointer.png')}
        style={appStyles.smallLogo}
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
        <PrimaryNavigationBtn
          title="Entrar"
          navigation={navigation}
          page="Home"
        />
      </View>
    </SafeAreaView>
  );
}

export default Login;
