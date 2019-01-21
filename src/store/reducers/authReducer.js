// @flow
import * as actionTypes from '../actions/actionTypes'

const {
  SIGNUP, LOGIN, FBSIGNIN, GOOGLESIGNIN, SUCCESS, FAILURE,
} = actionTypes

type Action = {
  type: string,
  response: Object,
  error: Object,
}
type States = {
  user: ?Object,
  token: ?string,
  error: ?Object,
}
export const initialState = {
  user: null,
  token: null,
  error: null,
}

export const authReducer = (state: States = initialState, action: Action) => {
  const { type, response, error } = action
  switch (type) {
    case SIGNUP[SUCCESS]:
      return {
        ...state,
        user: response.user,
      }
    case LOGIN[SUCCESS]:
    case FBSIGNIN[SUCCESS]:
    case GOOGLESIGNIN[SUCCESS]:
      return {
        ...state,
        user: response.user,
        token: response.token.split(' ')[1],
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
