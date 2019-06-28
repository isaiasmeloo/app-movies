import { StyleSheet } from 'react-native'
import { gray, white } from '../../helpers/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5
  },
  title: {
    color: white, fontWeight: 'bold', fontSize: 16, lineHeight: 28
  },
  containerImage: {
    backgroundColor: '#404040',
    width: '30%'
  },
  image: {
    flex: 1,
    height: 170
  },
  containerIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  text: {
    color: gray,
    fontSize: 16
  }

})

export default styles;
