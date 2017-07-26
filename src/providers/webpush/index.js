/* @flow */
import WebpushLoggerProvider from './logger'
// Types
import type {WebpushRequestType} from '../../model-request'

export interface WebpushProviderType {
  send(request: WebpushRequestType): Promise<string>
}

export default class WebpushProvider {
  id: string
  provider: WebpushProviderType

  constructor (type: string, config: Object) {
    switch (type) {
      case 'logger':
        this.provider = new WebpushLoggerProvider('webpush')
        break
      default:
        throw new Error(`Unknown webpush provider "${type}".`)
    }
    this.id = this.provider.id
  }

  send (request: WebpushRequestType): Promise<string> {
    return this.provider.send(request)
  }
}
