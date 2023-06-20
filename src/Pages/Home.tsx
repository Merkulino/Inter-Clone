/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useContext, useState} from 'react';
import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {NavigationScreenProp} from '../types';
import {homeStyle} from '../Styles/Home';
import {IconButtonSelector, PrimaryButton} from '../Components/Button';
import {AccountContext} from '../AppContext/AccountProvider';
import {useFocusEffect} from '@react-navigation/native';
import {appStyles} from '../Styles/App';

const URL_HELP_CENTER = 'https://www.bancointer.com.br/canais-de-atendimento/';
const BABI_URL_ASSISTANT_IMAGE =
  'https://static.bancointer.com.br/faq-babi/banner/images/f1197f7671074c6d87b885025e1e78a9_babi-hero.png';

function Home({navigation}: NavigationScreenProp) {
  const {
    accountData: {debit},
  } = useContext(AccountContext);
  const [balance, setBalance] = useState(debit.balance.toFixed(2));

  useFocusEffect(
    useCallback(() => {
      setBalance(debit.balance.toFixed(2));
    }, [debit]),
  );

  return (
    <SafeAreaView style={homeStyle.container}>
      <View style={homeStyle.header}>
        <Image
          style={homeStyle.smallLogo}
          source={require('../Styles/Assets/logobancointer.png')}
        />
        <Text
          style={{fontWeight: '900'}}
          onPress={() => navigation.navigate('Profile')}>
          PERFIL
        </Text>
      </View>
      <View style={homeStyle.valueSection}>
        <Text> R$ {balance} </Text>
        <Text
          style={{fontWeight: '900'}}
          onPress={() => navigation.navigate('BankStatement')}>
          Ver extrato
        </Text>
      </View>
      <View style={homeStyle.btnSection}>
        <IconButtonSelector
          title="Crédito"
          navigation={navigation}
          page="CreditCard"
          icon="credit-card"
        />
        <IconButtonSelector
          title="PIX"
          navigation={navigation}
          page="PaymentPIX"
          icon="key"
        />
        <IconButtonSelector
          title="Investir"
          navigation={navigation}
          page="Investment"
          icon="chart-line"
        />
        <IconButtonSelector
          title="Boleto"
          navigation={navigation}
          page="BankLipPayment"
          icon="file-invoice"
        />
        <IconButtonSelector
          title="Transferências"
          navigation={navigation}
          page="PaymentTED"
          icon="money-bill-wave"
        />
      </View>
      <View style={homeStyle.footerContent}>
        <Pressable
          style={homeStyle.helpContent}
          onPress={async () => await Linking.openURL(URL_HELP_CENTER)}>
          <Image
            style={homeStyle.babiImage}
            source={{
              uri: BABI_URL_ASSISTANT_IMAGE,
            }}
          />
          <View style={homeStyle.textHelp}>
            <Text style={appStyles.fontBold}>Precisa de ajuda?</Text>
            <Text>
              Fale no chat, tire suas dúvidas e acompanhe seus chamados.
            </Text>
          </View>
        </Pressable>
        <View style={homeStyle.footer}>
          <Text style={appStyles.fontBold}>Convide seus amigos</Text>
          <Text>
            Indique o Inter e chame todo mundo pra simplificar a vida!
          </Text>
          <PrimaryButton title="Convidar" />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
