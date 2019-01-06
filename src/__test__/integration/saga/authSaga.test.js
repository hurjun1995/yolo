//  @flow
import { call, put, take } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import { throwError } from 'redux-saga-test-plan/providers'

import {
  signUp,
  logIn,
  watchSignUp,
  watchSocialAccountSignIn,
  watchLoginFlow,
  socialAccountSignin,
} from '../../../store/sagas/authSaga'
import { FACEBOOK, GOOGLE, CHECK_YOUR_EMAIL_AND_PASSWORD_MESSAGE } from '../../../constants'
import * as api from '../../../api/auth'
import * as actions from '../../../store/actions/actionTypes'
import startMainTabs from '../../../screens/MainTabs/startMainTabs'
import { authReducer, initialState } from '../../../store/reducers/authReducer'

const {
  SIGNUP, LOGIN, SOCIALSIGNIN, REQUEST, SUCCESS, FAILURE,
} = actions

const testEmail = 'test@test.com'
const testPassword = 'test'
const testUserCredential = { user: {} }
const testCredential = { test: 'mock' }
const testErrorMessage = 'test error message'
const mockError = new Error(testErrorMessage)

it('signs the user up with email and password', () => {
  const expectedState = initialState
  expectedState.user = testUserCredential.user

  return expectSaga(watchSignUp)
    .withReducer(authReducer)
    .provide([
      [call(api.signUp, testEmail, testPassword), testUserCredential],
      [call(startMainTabs)],
    ])
    .call(signUp, testEmail, testPassword)
    .call(api.signUp, testEmail, testPassword)
    .put({ type: SIGNUP[SUCCESS], userCredential: testUserCredential })
    .call(startMainTabs)
    .dispatch({ type: SIGNUP[REQUEST], email: testEmail, password: testPassword })
    .hasFinalState(expectedState)
    .silentRun()
    .then((result) => {
      const { effects, allEffects } = result
      console.log(allEffects)
      console.log(effects.take)
      console.log(effects.put)
      console.log(effects.call)
      console.log(effects.call[0].CALL.fn)
      console.log(effects.call[0].CALL.args)
      expect(effects.call).toHaveLength(3)
    })
})

it('handles error raised during signUp', () => {
  const expectedState = initialState
  expectedState.error = testErrorMessage

  return expectSaga(watchSignUp)
    .withReducer(authReducer)
    .provide([
      [call(api.signUp, testEmail, testPassword), throwError(mockError)],
      [call(startMainTabs)],
    ])
    .dispatch({ type: SIGNUP[REQUEST], email: testEmail, password: testPassword })
    .call(signUp, testEmail, testPassword)
    .call(api.signUp, testEmail, testPassword)
    .put({ type: SIGNUP[FAILURE], error: testErrorMessage })
    .not.call(startMainTabs)
    .hasFinalState(expectedState)
    .silentRun()
})

it('signs the user in using facebook account', () => {
  const expectedState = initialState
  expectedState.user = testUserCredential.user

  return expectSaga(watchSocialAccountSignIn)
    .withReducer(authReducer)
    .provide([
      [call(api.getFacebookCredential), testCredential],
      [call(api.signInWithCredential, testCredential), testUserCredential],
      [call(startMainTabs)],
    ])
    .dispatch({ type: SOCIALSIGNIN[REQUEST], socialType: FACEBOOK })
    .call(socialAccountSignin, FACEBOOK)
    .call(api.getFacebookCredential)
    .call(startMainTabs)
    .hasFinalState(expectedState)
    .silentRun()
})

it('logs the user in with email and password', () => {
  const expectedState = initialState
  expectedState.user = testUserCredential.user

  return expectSaga(watchLoginFlow)
    .withReducer(authReducer)
    .provide([
      [call(api.logIn, testEmail, testPassword), testUserCredential],
      [call(startMainTabs)],
    ])
    .dispatch({ type: LOGIN[REQUEST], email: testEmail, password: testPassword })
    .call(logIn, testEmail, testPassword)
    .call(api.logIn, testEmail, testPassword)
    .put({ type: LOGIN[SUCCESS], userCredential: testUserCredential })
    .hasFinalState(expectedState)
    .silentRun()
})
