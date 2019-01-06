import firebase from 'react-native-firebase'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { GoogleSignin } from 'react-native-google-signin'

import { FBSIGNIN_CANCELLED, CHECK_YOUR_EMAIL_AND_PASSWORD_MESSAGE } from '../constants'

export function signUp(email, password) {
  return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
}

export function logIn(email, password) {
  return firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
}

export function signInWithCredential(credential) {
  return firebase.auth().signInAndRetrieveDataWithCredential(credential)
}

export async function getGoogleCredential() {
  await GoogleSignin.configure()
  return GoogleSignin.signIn().then(data => firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken))
}

export function getFacebookCredential() {
  return LoginManager.logInWithReadPermissions(['public_profile', 'email'])
    .then((result) => {
      if (result.isCancelled) {
        throw new Error(FBSIGNIN_CANCELLED)
      }
      return AccessToken.getCurrentAccessToken()
    })
    .then((data) => {
      if (!data) {
        throw new Error(CHECK_YOUR_EMAIL_AND_PASSWORD_MESSAGE)
      }
      return firebase.auth.FacebookAuthProvider.credential(data.accessToken)
    })
}
