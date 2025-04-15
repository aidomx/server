// core/app.ts
import { createServer, type IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import { getRouter } from './router'
import { missing, missingRequestMethod } from './handler'
import { dirname, bodyParser } from './utils'
import type { Method, Settings } from './types'

export const createApp = () => {
  const settings: Settings = {}
  const register: Record<string, any> = {}
  let requestMethod: string = ''

  const handle = (req: IncomingMessage, res: ServerResponse) => {
    const url = parse(req.url || '', true)
    const handler = register[url.pathname || '']

    if (req?.method)
      return handler
        ? handler[req.method.toLowerCase()](req, res)
        : missing(settings)(req, res)
  }

  return {
    get(path: string, method: Method) {
      register[path] = getRouter(method, this, settings)
    },

    post(path: string, method: Method) {
      requestMethod = 'POST'
      register[path] = getRouter(method, this, settings)
    },

    listen(...args: any[]) {
      return createServer(handle).listen(...args)
    },

    use(options: Settings) {
      Object.assign(settings, options)
    },

    dirname,
    handle,
    route: handle,
    requestMethod,
    register,
    settings,
    missing: missing(settings),
    missingRequestMethod,
    bodyParser,

    // Properti tambahan bisa bebas ditambahkan
    Router: {} as any,
  }
}
