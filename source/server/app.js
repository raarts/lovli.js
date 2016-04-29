import path from 'path';
import express from 'express';
import horizon from '@horizon/server';
import devProps from '../../config/webpack/devProps';
import config from '../../config/page';

const app = express();

app.use('/static', express.static(path.join(process.cwd(), '.build')));

const bundle = process.env.NODE_ENV === 'production'
? '/static/client.bundle.js'
: `http://127.0.0.1:${devProps.webpackPort}/static/client.bundle.js`;

app.use('/', (req, res) => {
  res.status(200).send(`<!doctype html>
    <html>
      <head>
        <title>${config.title}</title>
      </head>
      <body>
        <div id='root'></div>
        <script src="${bundle}"></script>
      </body>
    </html>`);
});

const run = () => {
  const port = process.env.PORT || config.port;

  const httpServer = app.listen(port, (err) => {
    if (err) {
      console.log(err); // eslint-disable-line
      return;
    }

    console.log(`Express listening at http://localhost:${port}`); // eslint-disable-line
  });

  // if we want to start secure, add key and cert props
  const horizonServer = horizon(httpServer, {
    auto_create_table: true,
    auto_create_index: true,
    auth: {
      allow_anonymous: true,
      allow_unauthenticated: true,
      token_secret: config.token_secret
    }
  });
};

export default {
  run
};
