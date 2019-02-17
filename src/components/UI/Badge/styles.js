import { StyleSheet } from 'react-native'

import { getWidthAndHeight } from '../../../utility/util'
import normalize from '../../../utility/normalizeText'

const { w } = getWidthAndHeight()

const styles = StyleSheet.create({
  container: {
    width: w * 0.075,
    height: w * 0.075,
    margin: 3,
    backgroundColor: '#344164',
    borderRadius: w * 0.0375,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: '#f8c74d',
  },
  textContainer: {
    fontSize: normalize(11),
    color: 'white',
  },
})

export default styles
