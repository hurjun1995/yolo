import { StyleSheet } from 'react-native'
import { getWidthAndHeight } from '../../utility/util'

const { h, w } = getWidthAndHeight()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: h * 0.08,
  },
  formContainer: {
    height: h * 0.45,
    width: w * 0.8,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 2,
    alignSelf: 'stretch',
  },
  input: {
    flex: 1,
  },
  // social login
  socialLoginContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  socialLoginButton: {
    flex: 1,
    marginHorizontal: 3,
    marginVertical: 0,
  },
  // login button
  loginOrSubmitButtonContainer: {
    flex: 0.7,
    alignSelf: 'stretch',
    marginLeft: 0,
    marginRight: 0,
  },
  loginOrSubmitButton: {
    borderRadius: 7,
  },
  signupSwitcher: {
    flex: 1,
  },
  signUpSwitcherText: {
    color: '#aaa',
  },
})

export default styles
