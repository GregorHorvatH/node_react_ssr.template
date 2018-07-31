// Core
import express from 'express';

// Models
import User from '../models/user';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('test loading...'); // eslint-disable-line

  User.find().exec((err, data) => {
    console.log('mongo error:', err); // eslint-disable-line
    console.log('mongo data:', data); // eslint-disable-line

    res.send(data);
  });
});

export default router;
