import {StyleSheet} from 'react-native';
import {primaryGreyColor} from './App';

const StateStyles = StyleSheet.create({
  container: {
    margin: 10,
    marginHorizontal: 25,
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  info: {
    padding: 10,
    gap: 2,
  },
  separator: {
    backgroundColor: primaryGreyColor,
    height: 1.2,
    borderRadius: 5,
  },
  dateTxt: {
    paddingBottom: 10,
  },
  txtBold: {
    fontWeight: '800',
  },
  emptyStatement: {
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: '500',
    fontSize: 20,
  },
});

export {StateStyles};
