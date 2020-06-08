import { AxiosRequestConfig } from '../types'
export default function xhr(config: AxiosRequestConfig) {
  const { data, url, methods = 'get' } = config

  const request = new XMLHttpRequest()
  request.open(methods.toUpperCase(), url, true)

  request.send(data)
}
