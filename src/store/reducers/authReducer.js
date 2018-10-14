import * as actionTypes from '../actions/actionTypes'

const { SIGNUP, SUCCESS, FAILURE } = actionTypes
const initialState = {
  user: null,
  error: null,
}

function authReducer(state = initialState, action) {
  const { type, userCredential, error } = action
  switch (type) {
    case SIGNUP[SUCCESS]:
      return {
        ...state,
        user: userCredential.user,
      }
    case SIGNUP[FAILURE]:
      return {
        ...state,
        error,
      }
    default:
      return state
  }
}

export default authReducer
