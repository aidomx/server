import type { IncomingMessage, ServerResponse } from 'http'
import qs from 'querystring'

export type BodyParserCallback = (body: ReturnType<typeof qs.parse>) => void
export type Chunk = typeof Buffer

export type Callback = (req: IncomingMessage, res: ServerResponse) => void

export type Method = Callback

export type Settings = {
  [key: string]: any
}

export type RouterMethods = {
  get: (path: string, cb: Callback) => void
  post: (path: string, cb: Callback) => void
}

export interface AppInstance {
  get: (path: string, cb: Method) => void
  post: (path: string, cb: Method) => void
  listen: (...args: any[]) => void
  use: (options: Settings) => void
  dirname: string
  handle: (req: IncomingMessage, res: ServerResponse) => void
  route: (req: IncomingMessage, res: ServerResponse) => void
  requestMethod: string
  register: Record<string, any>
  settings: Settings
  missing: Callback
  missingRequestMethod: Callback
  bodyParser: (req: IncomingMessage) => Promise<any>

  // Extendable:
  Router?: RouterMethods
}
