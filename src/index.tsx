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
import App from '../App';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={App} />
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CreditCard" component={CreditCard} />
        <Stack.Screen name="Investment" component={Investment} />
        <Stack.Screen name="InvestmentDetails" component={InvestmentDetails} />
        <Stack.Screen name="PaymentPIX" component={Pix} />
        <Stack.Screen name="PaymentTED" component={Ted} />
        <Stack.Screen name="BankLipPayment" component={BankLip} />
        <Stack.Screen name="BankStatement" component={BankStatement} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
