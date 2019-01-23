// @flow
import * as React from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Button, FormValidationMessage, SocialIcon } from 'react-native-elements'

import styles from './styles'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import MainText from '../../components/UI/MainText/MainText'
import TextButton from '../../components/UI/TextButton/TextButton'
// import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'
// import { startMainTabs } from './src/screens/navigation'
import validate from '../../utility/validation'
import { signUpAction, logInAction } from '../../store/actions/auth'
// import { FACEBOOK, GOOGLE } from '../../constants'

type Props = {
  signUp: Function,
  logIn: Function,
  authError: ?Object,
}
type State = {
  authMode: string,
  controls: Object,
}

class AuthScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      authMode: 'login',
      controls: {
        email: {
          value: '',
          valid: false,
          validationRules: {
            isEmail: true,
          },
        },
        password: {
          value: '',
          valid: false,
          validationRules: {
            minLength: 6,
          },
        },
        confirmPassword: {
          value: '',
          valid: false,
          validationRules: {
            equalTo: 'password',
          },
        },
      },
    }
  }

  signUpOrSignInHandler = () => {
    const { controls, authMode } = this.state
    const { signUp, logIn } = this.props
    const email = controls.email.value
    const password = controls.password.value

    if (authMode === 'signUp') {
      signUp(email, password)
    } else {
      logIn(email, password)
    }
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => ({
      authMode: prevState.authMode === 'login' ? 'signUp' : 'login',
    }))
  }

  // email = true, pwrd = true, cp = true, am: authMode = 'signUp'
  // !(email ^ pwrd ^ ((cp ^ am) v !am))
  // !(email ^ pwrd ^ (cp v !am))
  // !email v !pwrd v (!cp ^ am)
  isControlValid = () => {
    const { controls, authMode } = this.state
    return (
      (!controls.confirmPassword.valid && authMode === 'signUp')
      || !controls.email.valid
      || !controls.password.valid
    )
  }

  updateInputState = (key, val) => {
    const { controls } = this.state
    let connectedValue = {}
    const equalControl = controls[key].validationRules.equalTo
    if (equalControl) {
      const equalValue = controls[equalControl].value
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue,
      }
    }
    if (key === 'password') {
      connectedValue = {
        ...connectedValue,
        equalTo: val,
      }
    }
    this.setState(prevState => ({
      controls: {
        ...prevState.controls,
        confirmPassword: {
          ...prevState.controls.confirmPassword,
          valid:
            key === 'password'
              ? validate(
                prevState.controls.confirmPassword.value,
                prevState.controls.confirmPassword.validationRules,
                connectedValue,
              )
              : prevState.controls.confirmPassword.valid,
        },
        [key]: {
          ...prevState.controls[key],
          value: val,
          valid: validate(val, prevState.controls[key].validationRules, connectedValue),
        },
      },
    }))
  }

  render() {
    const { controls, authMode } = this.state
    const { email, password, confirmPassword } = controls
    const { authError } = this.props
    const {
      container,
      formContainer,
      inputContainer,
      input,
      loginOrSubmitButton,
      signupSwitcher,
      socialLoginContainer,
      socialLoginButton,
      loginOrSubmitButtonContainer,
      signUpSwitcherText,
    } = styles
    let confirmPasswordControl = null

    if (authMode === 'signUp') {
      confirmPasswordControl = (
        <DefaultInput
          placeholder="Confirm Password"
          value={confirmPassword.value}
          onChangeText={val => this.updateInputState('confirmPassword', val)}
          secureTextEntry
          style={styles.input}
        />
      )
    }

    return (
      <KeyboardAvoidingView behavior="padding" style={container}>
        <MainText>YOLO</MainText>
        <View style={formContainer}>
          <View style={inputContainer}>
            <DefaultInput
              placeholder="Email address"
              value={email.value}
              onChangeText={val => this.updateInputState('email', val)}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              style={input}
            />
            <DefaultInput
              placeholder="Password"
              value={password.value}
              onChangeText={val => this.updateInputState('password', val)}
              secureTextEntry
              style={input}
            />
            {confirmPasswordControl}
            {authError && <FormValidationMessage>{authError.message}</FormValidationMessage>}
          </View>
          <Button
            containerViewStyle={loginOrSubmitButtonContainer}
            buttonStyle={loginOrSubmitButton}
            title={authMode === 'login' ? 'Login' : ' Submit'}
            backgroundColor="orange"
            disabled={this.isControlValid()}
            onPress={this.signUpOrSignInHandler}
          />
          <View style={socialLoginContainer}>
            <SocialIcon
              title="FACEBOOK"
              button
              style={socialLoginButton}
              type="facebook"
              // TODO:
              // onPress={() => socialAccountSignIn(FACEBOOK)}
            />
            <SocialIcon
              title="GOOGLE"
              button
              type="google-plus-official"
              style={socialLoginButton}
              // TODO:
              // onPress={() => socialAccountSignIn(GOOGLE)}
            />
          </View>
          <View style={signupSwitcher}>
            <TextButton
              style={signUpSwitcherText}
              title={`Switch to ${authMode === 'login' ? ' Sign Up' : ' Login'}`}
              onPress={this.switchAuthModeHandler}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  authError: state.auth.error,
})

export default connect(
  mapStateToProps,
  {
    signUp: signUpAction,
    logIn: logInAction,
    // socialAccountSignIn: socialAccountSignInAction
  },
)(AuthScreen)
