import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RootNavigatorParamList, RootPageString} from '../types';
import {appStyles} from '../Styles/App';

type props = {
  title: string;
  navigation: NativeStackNavigationProp<RootNavigatorParamList>;
  page: RootPageString;
};

const IconButtonSelector = ({title, navigation, page}: props) => {
  // Ver essa questão dos Icon não funcionando
  return (
    <View style={appStyles.btnContainer}>
      <Icon.Button
        style={btnStyle.btn}
        name="mail"
        onPress={() => navigation.navigate(page)}>
        <Text style={btnStyle.txt}>{title}</Text>
      </Icon.Button>
    </View>
  );
};

const btnStyle = StyleSheet.create({
  btn: {
    backgroundColor: '#ffffff',
    color: '#000000',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 109, // Pesquisar um fitContent
    shadowOpacity: 0,
  },
  txt: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '900',
  },
});

export {IconButtonSelector};
