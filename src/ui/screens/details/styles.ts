import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationsContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  creators: {
    fontWeight: '500',
  },
  date: {
    paddingTop: 5,
  },
});
