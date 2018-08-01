// Core
import path from 'path';
import express from 'express';
import shrinkRay from 'shrink-ray';
import helmet from 'helmet';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import morgan from 'morgan'; // logger
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from 'passport';

// Instruments
import config from '../config/webpack.config.dev';
import renderServerSideApp from './helpers/renderServerSideApp';

// Routers
import graphqlRouter from './routes/graphiql';
import systemRouter from './routes/system';
import apiRouter from './routes/api';
import testRouter from './routes/test';

const app = express();

if (process.env.PUBLIC_URL === undefined) {
  throw new Error(
    'process.env.PUBLIC_URL must be defined. Did you copy .env_SAMPLE to .env?'
  );
}

app.use(shrinkRay());
app.use(helmet());
app.use(morgan('dev')); // app.use(morgan('tiny'));
app.use(cors()); // not having cors enabled will cause an access control error

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

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

// Routes
app.use('/graphql', graphqlRouter);
app.use('/system', systemRouter);
app.use('/api', apiRouter);
app.use('/test', testRouter);

// Node hot reload
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

app.get('*', renderServerSideApp);

app.post('/*', function(req, res) {
  res.send(`Api "${req.url}" does not exist!`);
});

export default app;
