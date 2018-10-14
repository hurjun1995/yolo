/* eslint import/prefer-default-export: 0 */
import { take, put, call } from 'redux-saga/effects'
import * as actions from '../actions/actionTypes'
import * as api from '../../api/auth'

const {
  SIGNUP, REQUEST, SUCCESS, FAILURE,
} = actions

function* signUp(email, password) {
  let userCredential = null
  try {
    userCredential = yield call(api.signUp, email, password)
    yield put({ type: SIGNUP[SUCCESS], userCredential })
  } catch (error) {
    yield put({ type: SIGNUP[FAILURE], error })
  }
  return userCredential
}

export function* watchSignUp() {
  while (true) {
    const { email, password } = yield take(SIGNUP[REQUEST])
    yield call(signUp, email, password)
  }
}

// function* watchLoginFlow() {
//   while (true) {
//     const { user, password } = yield take(USER[REQUEST])
//   }
// }
