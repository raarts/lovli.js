import path from 'path';
import fs from 'fs';
import https from 'https';
import express from 'express';
import horizon from '@horizon/server';
import devProps from '../../config/webpack/devProps';
import config from '../../config/page';

import './jobs';

const app = express();

app.use('/static', express.static(path.join(process.cwd(), '.build')));

/**
 * @TODO move the html out of the server dir
 */
const host = process.env.NODE_ENV === 'production' ? '' : `https://localhost:${devProps.webpackPort}`;
const bundle = `${host}/static/client.bundle.js`;
const styles = `${host}/static/styles.css`;

app.use('/', (req, res) => {
  res.status(200).send(`<!doctype html>
    <html>
      <head>
        <title>${config.title}</title>
        <link rel="stylesheet" type="text/css" href="${styles}" />
      </head>
      <body>
        <div id='root'></div>
        <script src="${bundle}"></script>
      </body>
    </html>`);
});

const run = () => {
  const port = process.env.PORT || config.port;

  const  options = {
    key: fs.readFileSync('horizon-key.pem'),
    cert: fs.readFileSync('horizon-cert.pem'),
  };

  const server = https.createServer(options, app);

  server.listen(port, (err) => {
    if (err) {
      console.log(err); // eslint-disable-line
      return;
    }
    console.log('Express server running at localhost:' + port);
  });

  const horizonServer = horizon(server, config.horizon_options);
  horizonServer.add_auth_provider(horizon.auth.github, config.github_oauth_options);

};

export default {
  run
};
