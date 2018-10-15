import { StyleSheet } from 'react-native'

import { getWidthAndHeight } from '../../utility/util'

const { h } = getWidthAndHeight()
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: h * 0.08,
  },
  formContainer: {
    height: h * 0.4,
  },
  inputContainer: {
    flex: 2,
  },
  input: {
    flex: 1,
    alignSelf: 'stretch',
  },
  loginSignupContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  loginOrSignupButton: {
    flex: 7,
  },
  loginOrSubmitButton: {
    flex: 3,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})

export default styles
