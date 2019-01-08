import { all } from 'redux-saga/effects'
import { watchSignUp, watchLoginFlow, watchSocialAccountSignIn } from './authSaga'

export default function* rootSaga() {
  yield all([watchSignUp(), watchLoginFlow(), watchSocialAccountSignIn()])
}
