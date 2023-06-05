import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import CreditCard from './Pages/CreditCard';
import Investment from './Pages/Investment';
import InvestmentDetails from './Pages/InvestmentDetails';
import Pix from './Pages/Pix';
import Ted from './Pages/Ted';
import BankLip from './Pages/BankLip';
import BankStatement from './Pages/BankStatement';
import {RootNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          contentStyle: {backgroundColor: '#FFFFFF'},
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Some',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Perfil'}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen name="CreditCard" component={CreditCard} />
        <Stack.Screen name="Investment" component={Investment} />
        <Stack.Screen
          name="InvestmentDetails"
          component={InvestmentDetails}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="PaymentPIX"
          component={Pix}
          options={{title: 'Pix'}}
        />
        <Stack.Screen name="PaymentTED" component={Ted} />
        <Stack.Screen name="BankLipPayment" component={BankLip} />
        <Stack.Screen name="BankStatement" component={BankStatement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
