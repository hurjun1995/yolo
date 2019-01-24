// @flow
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

import { goToAuthScreen } from '../navigations'
import { logoutAction } from '../../store/actions/auth'

class PersonalSettingScreen extends Component {
  state = {}

  onLogoutPressed = () => {
    this.props.logout()
    goToAuthScreen()
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{}}>PersonalSettingScreen</Text>
        <Button
          style={{ margin: 20 }}
          title="Logout"
          backgroundColor="orange"
          onPress={this.onLogoutPressed}
        />
      </View>
    )
  }
}
export default connect(
  null,
  { logout: logoutAction },
)(PersonalSettingScreen)
