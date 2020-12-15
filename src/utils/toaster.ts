import shortid from 'shortid'
import { Type, ToastProvider, Toast } from 'types'

export interface Toaster extends ToastProvider {
  type: Type
}

export const toaster = ({ content, type, config }: Toaster): Toast => {
  return {
    id: shortid.generate(),
    content,
    type,
    config,
  }
}