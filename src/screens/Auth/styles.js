import { StyleSheet, Dimensions } from 'react-native'
import { platformSpecific } from '../../utility/util'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: platformSpecific(height * 0.15, height * 0.05),
  },
  inputContainer: {
    width: '85%',
  },
})

export default styles
