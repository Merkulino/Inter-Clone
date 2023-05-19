import {StyleSheet} from 'react-native';

const homeStyle = StyleSheet.create({
  container: {
    margin: 10,
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
    width: 70, // Ver um fit content disso aqui
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
    gap: 5,
  },
});

export {homeStyle};
