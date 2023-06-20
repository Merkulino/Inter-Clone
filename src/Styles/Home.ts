import {StyleSheet} from 'react-native';
import {primaryGreyColor} from './App';

const homeStyle = StyleSheet.create({
  container: {
    margin: 10,
    height: '100%',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
  },
  valueSection: {
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    margin: 10,
    width: 100, // Ver um fit content disso aqui
    gap: 10,
  },
  smallLogo: {
    width: 80,
    height: 30,
    alignSelf: 'center',
  },
  btnSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
    gap: 5,
  },
  footerContent: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    gap: 20,
  },
  helpContent: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: primaryGreyColor,
    borderRadius: 5,
    alignItems: 'center',
  },
  babiImage: {
    width: 110,
    height: 100,
    marginLeft: -10,
  },
  textHelp: {
    width: '60%',
  },
  footer: {
    // backgroundColor: '#F5F6FA',
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
    gap: 10,
  },
});

export {homeStyle};
