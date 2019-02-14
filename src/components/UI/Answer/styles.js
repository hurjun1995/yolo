import { StyleSheet } from 'react-native'
import { getWidthAndHeight } from '../../../utility/util'

const { w, h } = getWidthAndHeight()

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: h * 0.05,
  },
  badgeBase: {
    flex: 1,
    margin: 3,
    backgroundColor: '#344164',
  },
  selectedBadge: {
    backgroundColor: '#f8c74d',
  },
})

export default styles
