// @flow
import axios from 'axios'
import { v1BaseUrl } from '../config/config'

function _getDefaultConfig(method, uri, body, headers) {
  const config = {
    method,
    url: uri,
    baseURL: v1BaseUrl,
    headers,
    data: body,
    responseType: 'json',
    validateStatus(status) {
      return status >= 200 && status < 300
    },
  }

  return config
}

/**
 * Send http request with provided JWT token
 * @param String method
 * @param String authToken
 * @param String uri
 * @param Object body
 * @param Object header       if not provided, default is {}
 */
export function sendRequestWithJWTAuthHeaderAsync(method, authToken, uri, body, headers = {}) {
  const config = _getDefaultConfig(method, uri, body, headers)
  const authHeader = authToken == null ? {} : { Authorization: `Bearer ${authToken}` }

  config.headers = Object.assign(authHeader, headers)
  return axios(config)
}

/**
 * Send http request
 * @param String method
 * @param String uri
 * @param Object body
 * @param Object header       if not provided, default is {}
 */
export function sendRequestAsync(method, uri, body, headers = {}) {
  const config = _getDefaultConfig(method, uri, body, headers)
  return axios(config)
}
