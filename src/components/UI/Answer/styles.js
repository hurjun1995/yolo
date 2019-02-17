import { StyleSheet } from 'react-native'
import { getWidthAndHeight } from '../../../utility/util'

const { h } = getWidthAndHeight()

const styles = StyleSheet.create({
  scaleAnswerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: h * 0.05,
  },
  selectedBadge: {
    backgroundColor: '#f8c74d',
  },
  checkBoxContainer: {
    borderWidth: 0,
    backgroundColor: 'white',
  },
})

export default styles
