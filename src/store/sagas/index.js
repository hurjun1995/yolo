import { all } from 'redux-saga/effects'
import { watchSignUp } from './authSaga'

export default function* rootSaga() {
  yield all([watchSignUp()])
}
