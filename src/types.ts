import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';

export type RootPageString =
  | 'Login'
  | 'Home'
  | 'Profile'
  | 'EditProfile'
  | 'CreditCard'
  | 'Investment'
  | 'InvestmentDetails'
  | 'PaymentPIX'
  | 'PaymentTED'
  | 'BankLipPayment'
  | 'BankStatement';

export type RootNavigatorParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
  EditProfile: undefined;
  CreditCard: undefined;
  Investment: undefined;
  InvestmentDetails: undefined;
  PaymentPIX: undefined;
  PaymentTED: undefined;
  BankLipPayment: undefined;
  BankStatement: undefined;
  // Details: {
  //   props: any;
  // };
};

export type NavigationScreenProp =
  NativeStackScreenProps<RootNavigatorParamList>;
