/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import {NavigationScreenProp} from '../types';
import {profileStyle} from '../Styles/Profile';
import {PrimaryNavigationBtn} from '../Components/Button';

function Profile({navigation}: NavigationScreenProp) {
  return (
    <SafeAreaView style={profileStyle.container}>
      <View style={profileStyle.contentView}>
        <Image
          style={profileStyle.image}
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
          }}
        />
        <Text style={{fontWeight: '800'}}> USERNAME </Text>
        <View style={profileStyle.dataContent}>
          <Text style={{fontWeight: '900'}}>Dados pessoais</Text>
          <Text>Email</Text>
          <Text style={{fontWeight: '600'}}>Email</Text>
          <Text>Nome de usuario</Text>
          <Text style={{fontWeight: '600'}}>Nome de usuario</Text>
          <Text>CPF</Text>
          <Text style={{fontWeight: '600'}}>CPF</Text>
          <Text style={{fontWeight: '900'}}>Dados bancarios</Text>
          <Text>Numero da conta</Text>
          <Text style={{fontWeight: '600'}}>Numero da conta</Text>
          <Text>Agencia</Text>
          <Text style={{fontWeight: '600'}}>Agencia</Text>
          <Text>Banco</Text>
          <Text style={{fontWeight: '600'}}>Banco</Text>
          <PrimaryNavigationBtn
            title="Atualizar dados"
            navigation={navigation}
            page="EditProfile"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
