import { IncomingMessage, ServerResponse } from 'http';
import { bodyParser } from './utils';
import type { Method, Settings } from './types';

export const getRouter = (method: Method, app: any, settings: Settings) => ({
  get: (req: IncomingMessage, res: ServerResponse) => {
    res.addListener('redirect', (url: string) => {
      res.writeHead(301, { location: url });
      res.end();
    });

    return method(req, res);
  },

  post: (req: IncomingMessage, res: ServerResponse) => {
    if (app.requestMethod !== req.method)
      return app.missingRequestMethod(req, res);
    bodyParser(req, (result) => {
      req.emit('body', result);
      return method(req, res);
    });
  },
});
