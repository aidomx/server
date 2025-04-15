import { type IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import { join, extname, resolve } from 'path';
import { readFileSync } from 'fs';
import { mimeTypes } from './utils';

export const missing =
  (settings: any) => (req: IncomingMessage, res: ServerResponse) => {
    const url = parse(req.url || '', true);
    const filepath = settings.public
      ? join(settings.public, url.pathname!)
      : join(resolve('public'), url.pathname!);

    try {
      const data = readFileSync(filepath);
      const ext = extname(filepath).toLowerCase();
      const contentType = mimeTypes[ext] || 'text/plain';

      res.writeHead(200, { 'Content-Type': contentType });
      res.write(data);
      res.end();
    } catch (e) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write(`[${req.method}] No route registered for ${url.pathname}`);
      res.end();
    }
  };

export const missingRequestMethod = (
  req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(400, { 'Content-Type': 'text/plain' });
  res.write(
    `Router [${req.method}] diperlukan untuk menangani permintaan url: ${req.url}`
  );
  res.end();
};
