/* eslint import/prefer-default-export: 0 */
import { take, put, call } from 'redux-saga/effects'

import * as actions from '../actions/actionTypes'
import * as api from '../../api/auth'
import startMainTabs from '../../screens/MainTabs/startMainTabs'

const {
  SIGNUP, LOGIN, FBSIGNIN, REQUEST, SUCCESS, FAILURE,
} = actions

// all kinds of SignUp might be able to be unified?
function* signUp(email, password) {
  let userCredential = null
  try {
    userCredential = yield call(api.signUp, email, password)
    yield put({ type: SIGNUP[SUCCESS], userCredential })
    yield call(startMainTabs)
  } catch (error) {
    yield put({ type: SIGNUP[FAILURE], error })
  }
  return userCredential
}

function* fbSignIn() {
  let userCredential
  try {
    const credential = yield call(api.getFacebookCredential)
    userCredential = yield call(api.signInWithCredential, credential)
    yield put({ type: LOGIN[SUCCESS], userCredential })
    yield call(startMainTabs)
  } catch (error) {
    if (error.message !== 'FBSIGNIN_CANCELLED') {
      yield put({ type: FBSIGNIN[FAILURE], error })
    }
  }
  return userCredential
}

function* logIn(email, password) {
  let userCredential = null
  try {
    userCredential = yield call(api.logIn, email, password)
    yield put({ type: LOGIN[SUCCESS], userCredential })
    yield call(startMainTabs)
  } catch (error) {
    yield put({ type: LOGIN[FAILURE], error: 'please check your email and password' })
  }
  return userCredential
}

// ****************************WATCHER**************************** //

export function* watchSignUp() {
  while (true) {
    const { email, password } = yield take(SIGNUP[REQUEST])
    yield call(signUp, email, password)
  }
}

export function* watchFBSignIn() {
  while (true) {
    yield take(FBSIGNIN[REQUEST])
    yield call(fbSignIn)
  }
}

export function* watchLoginFlow() {
  while (true) {
    const { email, password } = yield take(LOGIN[REQUEST])
    yield call(logIn, email, password)
  }
}
