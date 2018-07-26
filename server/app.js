import os from 'os';
import path from 'path';
import express from 'express';
import shrinkRay from 'shrink-ray';
import helmet from 'helmet';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import morgan from 'morgan';

import cors from 'cors';
import GraphHTTP from 'express-graphql';
import schema from './schema';

import config from '../config/webpack.config.dev';
import renderServerSideApp from './renderServerSideApp';

import dbMongo from './dbMongo';

const app = express();

if (process.env.PUBLIC_URL === undefined) {
  throw new Error(
    'process.env.PUBLIC_URL must be defined. Did you copy .env_SAMPLE to .env?'
  );
}

app.use(shrinkRay());
app.use(helmet());

// not having cors enabled will cause an access control error
app.use(cors());

function toMb(bytes) {
  return Math.floor(bytes / 1024 / 1024);
}

// GraphQL
app.use(
  '/graphql',
  GraphHTTP({
    schema,
    pretty: true,
    graphiql: true
  })
);

app.get('/test', (req, res) => {
  console.log('test loading...'); // eslint-disable-line

  dbMongo.usersModel.find().exec((err, data) => {
    console.log('mongo error:', err); // eslint-disable-line
    console.log('mongo data:', data); // eslint-disable-line

    res.send(data);
  });
});

app.get('/system', (req, res) => {
  const processMem = process.memoryUsage();
  const stats = {
    memory: {
      system: {
        free: toMb(os.freemem()),
        total: toMb(os.totalmem())
      },
      process: {
        rss: toMb(processMem.rss),
        heapTotal: toMb(processMem.heapTotal),
        heapUsed: toMb(processMem.heapUsed)
      }
    },
    loadavg: os.loadavg(),
    cpuCount: os.cpus().length,
    uptime: {
      system: Math.floor(os.uptime()),
      process: Math.floor(process.uptime())
    }
  };

  res.json(stats);
});

app.use(
  process.env.PUBLIC_URL,
  express.static(path.join(__dirname, '../build'), {
    maxage: '30 days'
  })
);

app.use(
  process.env.PUBLIC_URL,
  express.static(path.join(__dirname, '../public'), {
    maxage: '30 days'
  })
);

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);

  app.use(
    webpackDevMiddleware(compiler, {
      hot: true,
      publicPath: config.output.publicPath,
      progress: true,
      stats: {
        colors: true,
        assets: true,
        chunks: false,
        modules: false,
        hash: false
      }
    })
  );

  app.use(
    webpackHotMiddleware(compiler, {
      path: '/__webpack_hmr',
      heartbeat: 4000
    })
  );
}

app.use(morgan('tiny'));

app.get('*', renderServerSideApp);

export default app;
