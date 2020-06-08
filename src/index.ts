import { AxiosRequestConfig } from '../types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformResquest } from './helpers/data'
function axios(config: AxiosRequestConfig) {
  // TODO
  processConfig(config)
  xhr(config)
}

/**
 * @description
 * @param config
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = tranformData(config.data)
}
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
function tranformData(config: AxiosRequestConfig): any {
  transformResquest(config.data)
}

export default axios
