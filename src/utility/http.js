import axios from 'axios'
import { v1LocalhostBaseUrl } from '../constants'

export function sendRequestAsync(method, uri, body, headers = {}) {
  const authToken = {} // TODO: getToken()
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
