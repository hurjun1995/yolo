/* eslint import/prefer-default-export: 0 */
import firebase from 'react-native-firebase'
import { AccessToken, LoginManager } from 'react-native-fbsdk'

export function signUp(email, password) {
  return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
}

export function logIn(email, password) {
  return firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
}

export function signInWithCredential(credential) {
  console.log('signinwithcredential called')
  return firebase.auth().signInAndRetrieveDataWithCredential(credential)
}

export function getFacebookCredential() {
  return LoginManager.logInWithReadPermissions(['public_profile', 'email'])
    .then((result) => {
      if (result.isCancelled) {
        throw new Error('FBSIGNIN_CANCELLED')
      }
      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`)
      return AccessToken.getCurrentAccessToken()
    })
    .then((data) => {
      if (!data) {
        throw new Error('Something went wrong obtaining the users access token')
      }
      return firebase.auth.FacebookAuthProvider.credential(data.accessToken)
    })
}
