export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `U_${base}_${type}`
    return acc
  }, {})
}

export function action(type, payload = {}) {
  return { type, ...payload }
}

// auth
export const USER = createRequestTypes('USER')
export const SIGNUP = createRequestTypes('SIGNUP')
export const LOGIN = createRequestTypes('LOGIN')
export const FBSIGNIN = createRequestTypes('FBSIGNIN')
