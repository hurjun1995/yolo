import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const defaultInput = props => (
  <TextInput underlineColorAndroid="transparent" {...props} style={[styles.input, props.style]} />
);

export default defaultInput;
