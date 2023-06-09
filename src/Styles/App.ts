import {StyleSheet} from 'react-native';

var primaryColor = '#FC882F';
var primaryGreyColor = '#eeeeee';
var primaryGreyDarkColor = '#808080';

const appStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  primaryButton: {
    backgroundColor: primaryColor,
    borderRadius: 10,
    margin: 10,
  },
  textInput: {
    color: '#000000',
    backgroundColor: primaryGreyColor,
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
    width: 110,
    height: 110,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: primaryGreyDarkColor,
  },
  balanceContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: primaryGreyDarkColor,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  fontBold: {
    fontWeight: '700',
  },
});

export {appStyles, primaryColor, primaryGreyColor, primaryGreyDarkColor};
