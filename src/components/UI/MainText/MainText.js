/* eslint react/destructuring-assignment: 0 */
/* eslint react/prop-types: 0 */
import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainText: {
    color: 'black',
    backgroundColor: 'transparent',
    fontSize: 40,
  },
})

const MainText = props => <Text style={styles.mainText}>{props.children}</Text>

export default MainText
