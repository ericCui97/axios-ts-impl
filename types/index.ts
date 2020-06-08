export type Methods =
  | 'GET'
  | 'get'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'POST'
  | 'post'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
export interface AxiosRequestConfig {
  url: string
  methods?: string
  data?: any
  params?: any
}
