/* eslint-disable react-native/no-inline-styles */
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RootNavigatorParamList, RootPageString} from '../types';
import {appStyles, primaryColor} from '../Styles/App';

interface IBtnProp {
  title: string;
  btnFunction?(): void;
}

type NavigationBtnProp = {
  title: string;
  navigation: NativeStackNavigationProp<RootNavigatorParamList>;
  page: RootPageString;
};

const PrimaryButton = ({title, btnFunction}: IBtnProp) => (
  <TouchableOpacity
    style={btnStyle.primaryButton}
    onPress={() => {
      if (btnFunction) {
        btnFunction();
      }
    }}>
    <Text style={{fontWeight: '900'}}>{title}</Text>
  </TouchableOpacity>
);

const IconButtonSelector = ({title, navigation, page}: NavigationBtnProp) => {
  // Ver essa questão dos Icon não funcionando
  return (
    <View style={appStyles.btnContainer}>
      <Icon.Button
        style={btnStyle.btn}
        name="xbox"
        iconStyle={{color: '#000000'}}
        onPress={() => navigation.navigate(page)}>
        <Text style={btnStyle.txt}>{title}</Text>
      </Icon.Button>
    </View>
  );
};

const btnStyle = StyleSheet.create({
  btn: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    shadowOpacity: 0,
    height: '100%',
    borderRadius: 5,
  },
  txt: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '900',
  },
  primaryButton: {
    backgroundColor: primaryColor,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height: 50,
    padding: 5,
    width: 300,
  },
});

export {IconButtonSelector, PrimaryButton};
