/* eslint-disable react-native/no-inline-styles */
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RootNavigatorParamList, RootPageString} from '../types';
import {appStyles, primaryColor} from '../Styles/App';

type DefaultBtn = {
  title: string;
};

type NavigationBtnProp = {
  title: string;
  navigation: NativeStackNavigationProp<RootNavigatorParamList>;
  page: RootPageString;
};

const PrimaryButton = ({title}: DefaultBtn) => {
  return (
    <View style={btnStyle.primaryButton}>
      <Text style={{fontWeight: '900'}}>{title}</Text>
    </View>
  );
};

const PrimaryNavigationBtn = ({title, navigation, page}: NavigationBtnProp) => {
  return (
    <TouchableOpacity
      style={btnStyle.primaryButton}
      onPress={() => navigation.navigate(page)}>
      <Text style={{fontWeight: '900'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const IconButtonSelector = ({title, navigation, page}: NavigationBtnProp) => {
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
    shadowOpacity: 0,
    height: 109,
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

export {IconButtonSelector, PrimaryButton, PrimaryNavigationBtn};
