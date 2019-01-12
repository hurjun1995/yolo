// @flow
import axios from 'axios'
import { v1LocalhostBaseUrl } from '../constants'

/**
 * Send http request with provided JWT token
 * 
 * 
 * @param String method
 * @param String authToken
 * @param String uri
 * @param Object body
 * @param Object header       if not provided, default is {} 
 * 
 * @returns 
 */
export function sendRequestWithJWTAuthHeaderAsync(method, authToken, uri, body, headers = {}) {
  const authHeader = authToken == null ? {} : { Authorization: `Bearer ${authToken}` }

  const config = {
    method: String.toLowerCase(method),
    url: uri,
    baseURL: v1LocalhostBaseUrl,
    headers: Object.assign(authHeader, headers),
    data: body,
    responseType: 'json',
    validateStatus(status) {
      return status >= 200 && status < 300
    },
  }

  return axios(config)
}