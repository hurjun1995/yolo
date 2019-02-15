import { StyleSheet } from 'react-native'
import { getWidthAndHeight } from '../../../utility/util'

const { w } = getWidthAndHeight()

const styles = StyleSheet.create({
  questionText: {
    padding: w * 0.03,
    color: 'black',
  },
})

export default styles
