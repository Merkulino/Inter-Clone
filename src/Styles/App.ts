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
    color: '#000000',
    backgroundColor: '#F5F6FA',
    borderRadius: 10,
    padding: 10,
    marginLeft: 0,
    margin: 10,
    fontWeight: '500',
  },
  smallLogo: {
    width: 110,
    height: 40,
    alignSelf: 'center',
  },
  btnContainer: {
    alignContent: 'stretch',
    width: 110,
    height: 110,
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

export {appStyles, primaryColor};
