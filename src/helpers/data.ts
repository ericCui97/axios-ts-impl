import { isPlainObject } from './utils'

export function transformResquest(data: any): any {
  if (isPlainObject(data)) return JSON.stringify(data)
  return data
}
