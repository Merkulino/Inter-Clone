import {StyleSheet} from 'react-native';

const profileStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    padding: 20,
  },
  contentView: {
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  dataContent: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E5E5E5',
    gap: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
});

export {profileStyle};
