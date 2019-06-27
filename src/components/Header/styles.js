import { getStatusBarHeight } from 'react-native-status-bar-height'
import { StyleSheet } from 'react-native'
import { white, primary } from '../../helpers/colors'

const styles = StyleSheet.create({
  container: {
    height: 54 + getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getStatusBarHeight(),
    backgroundColor: primary,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: white,
  }
})

export default styles;
