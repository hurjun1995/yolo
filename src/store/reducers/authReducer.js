// @flow
import * as actionTypes from '../actions/actionTypes'

const {
  SIGNUP, LOGIN, FBSIGNIN, GOOGLESIGNIN, SUCCESS, FAILURE,
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
export const initialState = {
  user: null,
  error: null,
}

export const authReducer = (state: States = initialState, action: Action) => {
  const { type, userCredential, error } = action
  switch (type) {
    case SIGNUP[SUCCESS]:
    case LOGIN[SUCCESS]:
    case FBSIGNIN[SUCCESS]:
    case GOOGLESIGNIN[SUCCESS]:
      return {
        ...state,
        user: userCredential.user,
      }
    case SIGNUP[FAILURE]:
    case LOGIN[FAILURE]:
    case FBSIGNIN[FAILURE]:
    case GOOGLESIGNIN[FAILURE]:
      return {
        ...state,
        error,
      }
    default:
      return state
  }
}
