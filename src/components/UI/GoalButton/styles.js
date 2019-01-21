import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width / 8,
    borderColor: 'black',
    borderWidth: 3,
    width: width / 4,
    height: width / 4,
  },
})

export default styles
