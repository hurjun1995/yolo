import { StyleSheet } from 'react-native'
import normalize from '../../utility/normalizeText'

const styles = StyleSheet.create({
  listContainer: {
    marginTop: normalize(5),
    borderTopWidth: 0,
  },
  listItem: {
    borderBottomWidth: 0,
  },
  divider: {
    width: '90%',
    alignSelf: 'center',
  },
})

export default styles
