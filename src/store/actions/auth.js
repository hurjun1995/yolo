/* eslint import/prefer-default-export: 0 */
import * as actions from './actionTypes'

const {
  action, USER, SIGNUP, LOGIN, FBSIGNIN, REQUEST, SUCCESS, FAILURE,
} = actions

export const user = {
  request: login => action(USER[REQUEST], { login }),
  success: (login, response) => action(USER[SUCCESS], { login, response }),
  failure: (login, error) => action(USER[FAILURE], { login, error }),
}

export const signUpAction = (email, password) => action(SIGNUP[REQUEST], { email, password })
export const logInAction = (email, password) => action(LOGIN[REQUEST], { email, password })
export const fbSignUpAction = () => action(FBSIGNIN[REQUEST])

// export const signUp = {
//   request: (email, password) => action(SIGNUP[REQUEST], { email, password }),
//   success: response => action(SIGNUP[SUCCESS], { response }),
//   failure: error => action(SIGNUP[FAILURE], { error }),
// }

// export default signUpAction
