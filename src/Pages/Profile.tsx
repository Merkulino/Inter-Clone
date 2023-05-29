/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import {NavigationScreenProp} from '../types';
import {profileStyle} from '../Styles/Profile';
import {PrimaryButton} from '../Components/Button';
import {UserContext} from '../AppContext/UserProvider';

function Profile({navigation}: NavigationScreenProp) {
  const {userData} = useContext(UserContext);
  return (
    <SafeAreaView style={profileStyle.container}>
      <View style={profileStyle.contentView}>
        <Image
          style={profileStyle.image}
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
          }}
        />
        <Text style={{fontWeight: '800'}}> {userData.name} </Text>
        <View style={profileStyle.dataContent}>
          <Text style={{fontWeight: '900'}}>Dados pessoais</Text>
          <Text>Email</Text>
          <Text style={{fontWeight: '600'}}>{userData.mail}</Text>
          <Text>Nome de usuario</Text>
          <Text style={{fontWeight: '600'}}>{userData.name}</Text>
          <Text>CPF</Text>
          <Text style={{fontWeight: '600'}}>{userData.cpf}</Text>
          <Text style={{fontWeight: '900'}}>Dados bancarios</Text>
          <Text>Numero da conta</Text>
          <Text style={{fontWeight: '600'}}>blablabalbal</Text>
          <Text>Agencia</Text>
          <Text style={{fontWeight: '600'}}>Agencia</Text>
          <Text>Banco</Text>
          <Text style={{fontWeight: '600'}}>Banco</Text>
          <PrimaryButton
            title="Atualizar dados"
            btnFunction={() => navigation.navigate('EditProfile')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
