import { all } from 'redux-saga/effects'
import { watchSignUp, watchLoginFlow } from './authSaga'

export default function* rootSaga() {
  yield all([watchSignUp(), watchLoginFlow()])
}
