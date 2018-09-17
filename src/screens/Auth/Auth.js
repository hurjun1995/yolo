import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <MainText>YOLO</MainText>
        <DefaultInput placeholder="Email address" />
        <DefaultInput placeholder="Password" />
        <ButtonWithBackground color="#ffb347" onPress={this.loginHandler}>
          Submit
        </ButtonWithBackground>
      </View>
    );
  }
}

export default AuthScreen;
