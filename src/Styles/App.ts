import {StyleSheet} from 'react-native';

var primaryColor = '#FC882F';

const appStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  primaryButton: {
    backgroundColor: primaryColor,
    borderRadius: 50,
    margin: 10,
  },
  textInput: {
    backgroundColor: '#F5F6FA',
    borderRadius: 10,
    padding: 10,
    marginLeft: 0,
    margin: 10,
    fontWeight: '500',
    color: '#000000',
  },
  smallLogo: {
    width: 50,
    height: 50,
  },
});

export {appStyles, primaryColor};
