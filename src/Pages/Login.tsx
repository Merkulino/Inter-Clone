import React, {useContext, useState} from 'react';
import {SafeAreaView, Text, View, TextInput, Image, Alert} from 'react-native';
import {NavigationScreenProp} from '../types';
import {appStyles} from '../Styles/App';
import {loginStyle} from '../Styles/Login';
import {PrimaryButton} from '../Components/Button';
import {UserContext} from '../AppContext/UserProvider';
import {AccountContext} from '../AppContext/AccountProvider';
import User from '../BankSystem/User';
import DebitAccount from '../BankSystem/Account/DebitAccount';
import CreditAccount from '../BankSystem/Account/CreditAccount';

function Login({navigation}: NavigationScreenProp) {
  const {setUser} = useContext(UserContext);
  const {setData} = useContext(AccountContext);
  const [account, setAccNum] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    if (!account.trim() || !password.trim()) {
      Alert.alert('Inputs vazio', 'Não é possivel logar sem dados de usuario');
    } else if (setUser && setData) {
      // Create default User and deafult Account
      const user = new User(1, 'Melqui Brito', 'user@user.com', '1234567890');
      const debit = new DebitAccount(
        {id: 1, _user: user},
        Number((Math.random() * (1000 - 100 + 1) + 100).toFixed(2)),
      );
      const credit = new CreditAccount({id: 1, _user: user});

      setUser(user);
      setData({debit, credit});
      navigation.navigate('Home');
    }
  };

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
          defaultValue={account}
          onChangeText={value => setAccNum(value)}
          keyboardType="numeric"
          maxLength={8}
        />

        <Text>Senha</Text>
        <TextInput
          style={appStyles.textInput}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <PrimaryButton title="Entrar" btnFunction={loginUser} />
      </View>
    </SafeAreaView>
  );
}

export default Login;
