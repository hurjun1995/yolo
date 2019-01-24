import React, { Component } from 'react'
import { connect } from 'react-redux'

import { goToAuthScreen, startMainTabs } from '../navigations'
import MainText from '../../components/UI/MainText/MainText'

type Props = {
  userToken: ?string,
}

class Initialize extends Component<Props, {}> {
  componentDidMount() {
    if (this.props.userToken === null) {
      goToAuthScreen()
    } else {
      startMainTabs()
    }
  }

  render() {
    return <MainText>Loading...</MainText>
  }
}

const mapStateToProps = state => ({
  userToken: state.auth.token,
})

export default connect(
  mapStateToProps,
  null,
)(Initialize)
