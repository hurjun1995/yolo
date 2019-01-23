import React, { Component } from 'react'

import MainText from '../../components/UI/MainText/MainText'

type States = {
  user: ?Object,
}

export class App extends Component<{}, States> {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  // componentDidMount() {
  //   this.firebaseAuthListener = firebase.auth().onAuthStateChanged((user) => {
  //     this.setState({ user })
  //   })
  // }

  // componentWillUnmount() {
  //   if (this.firebaseAuthListener) {
  //     this.firebaseAuthListener()
  //   }
  // }

  // firebaseAuthListener: ?Function

  render() {
    const { user } = this.state
    return <MainText>Loading...</MainText>
  }
}
