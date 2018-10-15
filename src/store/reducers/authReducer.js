// @flow
import * as actionTypes from '../actions/actionTypes'

const {
  SIGNUP, LOGIN, FBSIGNIN, SUCCESS, FAILURE,
} = actionTypes

type Action = {
  type: string,
  userCredential: Object,
  error: Object,
}
type States = {
  user: ?Object,
  error: ?string,
}
const initialState = {
  user: null,
  error: null,
}

function authReducer(state: States = initialState, action: Action) {
  const { type, userCredential, error } = action
  switch (type) {
    case SIGNUP[SUCCESS]:
    case LOGIN[SUCCESS]:
    case FBSIGNIN[SUCCESS]:
      return {
        ...state,
        user: userCredential.user,
      }
    case SIGNUP[FAILURE]:
    case LOGIN[FAILURE]:
    case FBSIGNIN[FAILURE]:
      return {
        ...state,
        error,
      }
    default:
      return state
  }
}

export default authReducer
