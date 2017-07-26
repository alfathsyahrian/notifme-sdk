/* @flow */
import PushLoggerProvider from './logger'
// Types
import type {PushRequestType} from '../../model-request'

export interface PushProviderType {
  send(request: PushRequestType): Promise<string>
}

export default class PushProvider {
  id: string
  provider: PushProviderType

  constructor (type: string, config: Object) {
    switch (type) {
      case 'logger':
        this.provider = new PushLoggerProvider('push')
        break
      default:
        throw new Error(`Unknown push provider "${type}".`)
    }
    this.id = this.provider.id
  }

  send (request: PushRequestType): Promise<string> {
    return this.provider.send(request)
  }
}
