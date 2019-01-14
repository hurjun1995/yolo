import firebase from 'react-native-firebase'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { GoogleSignin } from 'react-native-google-signin'

import { sendRequestWithJWTAuthHeaderAsync, sendRequestAsync } from '../utility/http'
import { FBSIGNIN_CANCELLED, CHECK_YOUR_EMAIL_AND_PASSWORD_MESSAGE, httpMethod } from '../constants'

export function signUp(email, password) {
  // TODO: decide on what to return from response object
  return sendRequestAsync(httpMethod.POST, '/user', { email, password })
}

export function logIn(email, password) {
  // TODO: decide on what to return from response object
  return sendRequestWithJWTAuthHeaderAsync(httpMethod.POST, '/user/login', { email, password })
}

export function signInWithCredential(credential) {
  // TODO
  return firebase.auth().signInAndRetrieveDataWithCredential(credential)
}

export async function getGoogleCredential() {
  // TODO
  await GoogleSignin.configure()
  return GoogleSignin.signIn().then(data => firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken))
}

export function getFacebookCredential() {
  // TODO
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
