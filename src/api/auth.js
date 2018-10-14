/* eslint import/prefer-default-export: 0 */
import firebase from 'react-native-firebase'

export function signUp(email, password) {
  return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
}

export function logIn(email, password) {
  return firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
}
