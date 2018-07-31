import express from 'express';
import GraphHTTP from 'express-graphql';

import schema from '../db/schema';

const router = express.Router();

// GraphQL
router.use(
  '/',
  GraphHTTP({
    schema,
    pretty: true,
    graphiql: true
  })
);

export default router;
