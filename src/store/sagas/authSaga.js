/* eslint import/prefer-default-export: 0 */
import { take, put, call } from 'redux-saga/effects'

import * as actions from '../actions/actionTypes'
import * as api from '../../api/auth'
import { startMainTabs } from '../../screens/navigations'
import {
  FACEBOOK,
  GOOGLE,
  FBSIGNIN_CANCELLED,
  GOOGLE_SIGNIN_CANCEL_ERROR_CODE,
  CHECK_YOUR_EMAIL_AND_PASSWORD_MESSAGE,
} from '../../constants'

const {
  SIGNUP, LOGIN, SOCIALSIGNIN, REQUEST, SUCCESS, FAILURE,
} = actions

// all kinds of SignUp might be able to be unified?
export function* signUp(email, password) {
  let response
  try {
    response = yield call(api.signUp, email, password)
    yield put({ type: SIGNUP[SUCCESS], response })
    yield call(startMainTabs)
  } catch (error) {
    yield put({ type: SIGNUP[FAILURE], error })
  }
  return response
}

// export function* socialAccountSignin(socialType) {
//   // TODO: refactor this function to use yolobackend
//   let userCredential
//   try {
//     let credential
//     if (socialType === FACEBOOK) {
//       credential = yield call(api.getFacebookCredential)
//     } else {
//       credential = yield call(api.getGoogleCredential)
//     }
//     userCredential = yield call(api.signInWithCredential, credential)
//     yield put({ type: LOGIN[SUCCESS], userCredential })
//     yield call(startMainTabs)
//   } catch (error) {
//     // checks if signIn is cancelled
//     // if yes, don't show error message
//     if (
//       (socialType === FACEBOOK && error.message !== FBSIGNIN_CANCELLED)
//       || (socialType === GOOGLE && error.code !== GOOGLE_SIGNIN_CANCEL_ERROR_CODE)
//     ) {
//       yield put({ type: LOGIN[FAILURE], error })
//     }
//   }
//   return userCredential
// }

export function* logIn(email, password) {
  let response
  try {
    response = yield call(api.logIn, email, password)
    yield put({ type: LOGIN[SUCCESS], response })
    yield call(startMainTabs)
  } catch (error) {
    yield put({ type: LOGIN[FAILURE], error: error.response.data })
  }
  return response
}

// ****************************WATCHER**************************** //

export function* watchSignUp() {
  while (true) {
    const { email, password } = yield take(SIGNUP[REQUEST])
    yield call(signUp, email, password)
  }
}

// export function* watchSocialAccountSignIn() {
//   while (true) {
//     const { socialType } = yield take(SOCIALSIGNIN[REQUEST])
//     yield call(socialAccountSignin, socialType)
//   }
// }

export function* watchLoginFlow() {
  while (true) {
    const { email, password } = yield take(LOGIN[REQUEST])
    yield call(logIn, email, password)
  }
}
