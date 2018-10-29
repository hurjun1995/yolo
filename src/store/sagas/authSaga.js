/* eslint import/prefer-default-export: 0 */
import { take, put, call } from 'redux-saga/effects'

import * as actions from '../actions/actionTypes'
import * as api from '../../api/auth'
import startMainTabs from '../../screens/MainTabs/startMainTabs'
import { FACEBOOK, GOOGLE, FBSIGNIN_CANCELLED } from '../../constants'

const {
  SIGNUP, LOGIN, SOCIALSIGNIN, REQUEST, SUCCESS, FAILURE,
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

function* socialAccountSignin(socialType) {
  let userCredential
  try {
    let credential
    if (socialType === FACEBOOK) {
      credential = yield call(api.getFacebookCredential)
    } else {
      credential = yield call(api.getGoogleCredential)
    }
    userCredential = yield call(api.signInWithCredential, credential)
    yield put({ type: LOGIN[SUCCESS], userCredential })
    yield call(startMainTabs)
  } catch (error) {
    // checks if signIn is cancelled
    // if yes, don't show error message
    // -5 is error code for google-login-cancelled
    if (
      (socialType === FACEBOOK && error.message !== FBSIGNIN_CANCELLED)
      || (socialType === GOOGLE && error.code !== '-5')
    ) {
      yield put({ type: LOGIN[FAILURE], error: error.message })
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

export function* watchSocialAccountSignIn() {
  while (true) {
    const { socialType } = yield take(SOCIALSIGNIN[REQUEST])
    yield call(socialAccountSignin, socialType)
  }
}

export function* watchLoginFlow() {
  while (true) {
    const { email, password } = yield take(LOGIN[REQUEST])
    yield call(logIn, email, password)
  }
}
