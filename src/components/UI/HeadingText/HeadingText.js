/* eslint react/destructuring-assignment: 0 */
/* eslint react/prop-types: 0 */
import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
})

const headingText = props => (
  <Text {...props} style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
)

export default headingText
