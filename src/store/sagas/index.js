import { all } from 'redux-saga/effects'
import { watchSignUp, watchLoginFlow, watchFBSignIn } from './authSaga'

export default function* rootSaga() {
  yield all([watchSignUp(), watchLoginFlow(), watchFBSignIn()])
}
