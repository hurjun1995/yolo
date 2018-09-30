/* eslint import/prefer-default-export: 0 */
import { TRY_AUTH } from './actionTypes'

export const tryAuth = authData => ({
  type: TRY_AUTH,
  authData,
})
