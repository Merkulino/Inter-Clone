import {StyleSheet} from 'react-native';
import {primaryGreyColor} from './App';

const blueColor = '#E1F5FE';

const creditStyle = StyleSheet.create({
  container: {
    margin: 20,
    padding: 5,
    gap: 15,
  },
  cardContainer: {
    padding: 20,
    borderRadius: 10,
  },
  limitContainer: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: primaryGreyColor,
    gap: 10,
  },
  limit: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: primaryGreyColor,
    borderRadius: 5,
    padding: 5,
  },
  progressBarContainer: {
    height: 30,
    backgroundColor: primaryGreyColor,
    borderRadius: 5,
  },
  progressBar: {
    height: 30,
    backgroundColor: '#1277BD',
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  usageInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  billContainer: {
    padding: 0,
    borderColor: blueColor,
    borderWidth: 1,
    marginBottom: 20,
  },
  headerBill: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: blueColor,
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  footerBill: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
  },
});

export {creditStyle};
