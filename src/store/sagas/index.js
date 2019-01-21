import { all } from 'redux-saga/effects'
import { watchSignUp, watchLoginFlow } from './authSaga'

export default function* rootSaga() {
  // TODO: add watchSocialAccountSignIn back in later
  yield all([watchSignUp(), watchLoginFlow()])
}
