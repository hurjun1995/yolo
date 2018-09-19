import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import startMainTabs from '../MainTabs/startMainTabs';
import validate from '../../utility/validation';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    startMainTabs();
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
    this.setState(prevState => ({
      controls: {
        ...prevState.controls,
        [key]: {
          ...prevState.controls[key],
          value: val,
          valid: validate(val, prevState.controls[key].validationRules, connectedValue),
        },
      },
    }));
  };

  render() {
    const { controls } = this.state;
    const { email, password, confirmPassword } = controls;
    return (
      <View style={styles.container}>
        <MainText>YOLO</MainText>
        <DefaultInput
          placeholder="Email address"
          value={email.value}
          onChangeText={val => this.updateInputState('email', val)}
        />
        <DefaultInput
          placeholder="Password"
          value={password.value}
          onChangeText={val => this.updateInputState('password', val)}
        />
        <DefaultInput
          placeholder="Confirm Password"
          value={confirmPassword.value}
          onChangeText={val => this.updateInputState('confirmPassword', val)}
        />
        <ButtonWithBackground color="#ffb347" onPress={this.loginHandler}>
          Login
        </ButtonWithBackground>
      </View>
    );
  }
}

export default AuthScreen;
