import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {NavigationScreenProp} from '../types';

function Profile({navigation}: NavigationScreenProp) {
  return (
    <SafeAreaView>
      <View>
        <Text> Profile Page! </Text>
        <Button
          title="Editar perfil"
          onPress={() => navigation.push('EditProfile')}
        />
      </View>
    </SafeAreaView>
  );
}

export default Profile;
