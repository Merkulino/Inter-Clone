import {StyleSheet} from 'react-native';
import {primaryColor} from './App';

const pixStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    // alignContent: 'center',
    // alignItems: 'center',
    padding: 20,
  },
  header: {
    gap: 20,
  },
  btn: {
    backgroundColor: primaryColor,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height: 50,
    padding: 5,
    width: 300,
  },
});

export {pixStyle};
