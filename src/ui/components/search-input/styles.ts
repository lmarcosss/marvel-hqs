import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },
  containerImage: {
    marginHorizontal: 10,
    position: 'absolute',
    left: 0,
  },
  image: {
    width: 20,
    height: 20,
  },
  containerCloseImage: {
    marginHorizontal: 10,
    position: 'absolute',
    right: 0,
  },
  closeImage: {
    width: 15,
    height: 15,
  },
  input: {
    color: '#000',
  },
});
