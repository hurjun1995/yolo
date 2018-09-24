import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import startMainTabs from '../MainTabs/startMainTabs';
import validate from '../../utility/validation';
import { tryAuth } from '../../store/actions/index';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
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
    };
  }

  loginHandler = () => {
    const { controls } = this.state;
    const authData = {
      email: controls.email.value,
      password: controls.password.value,
    };
    this.props.onLogin(authData);
    startMainTabs();
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => ({
      authMode: prevState.authMode === 'login' ? 'signup' : 'login',
    }));
  };

  // email = true, pwrd = true, cp = true, am: authMode = 'signup'
  // !(email ^ pwrd ^ ((cp ^ am) v !am))
  // !(email ^ pwrd ^ (cp v !am))
  // !email v !pwrd v (!cp ^ am)
  isControlValid = () => {
    const { controls, authMode } = this.state;
    return (
      (!controls.confirmPassword.valid && authMode === 'signup')
      || !controls.email.valid
      || !controls.password.valid
    );
  };

  updateInputState = (key, val) => {
    const { controls } = this.state;
    let connectedValue = {};
    const equalControl = controls[key].validationRules.equalTo;
    if (equalControl) {
      const equalValue = controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue,
      };
    }
    if (key === 'password') {
      connectedValue = {
        ...connectedValue,
        equalTo: val,
      };
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
    }));
  };

  render() {
    const { controls, authMode } = this.state;
    const { email, password, confirmPassword } = controls;
    let confirmPasswordControl = null;
    if (authMode === 'signup') {
      confirmPasswordControl = (
        <DefaultInput
          placeholder="Confirm Password"
          value={confirmPassword.value}
          onChangeText={val => this.updateInputState('confirmPassword', val)}
          secureTextEntry
        />
      );
    }
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <MainText>YOLO</MainText>
        <ButtonWithBackground color="#ffb347" onPress={this.switchAuthModeHandler}>
          Switch to
          {authMode === 'login' ? ' Sign Up' : ' Login'}
        </ButtonWithBackground>
        <View style={styles.inputContainer}>
          <DefaultInput
            placeholder="Email address"
            value={email.value}
            onChangeText={val => this.updateInputState('email', val)}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />
          <DefaultInput
            placeholder="Password"
            value={password.value}
            onChangeText={val => this.updateInputState('password', val)}
            secureTextEntry
          />
          {confirmPasswordControl}
        </View>
        <ButtonWithBackground
          color="#ffb347"
          onPress={this.loginHandler}
          disabled={this.isControlValid()}
        >
          {authMode === 'login' ? 'Login' : ' Submit'}
        </ButtonWithBackground>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: authData => dispatch(tryAuth(authData)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AuthScreen);
