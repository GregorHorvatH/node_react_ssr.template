// Core
import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';

// Instruments
import config from '../config/database';
import configPassport from '../config/passport';

configPassport(passport);

const router = express.Router();

// Models
import User from '../models/user';
import Book from '../models/book';

router.get('/', function(req, res) {
  res.send('api');
});

router.post('/signup', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: 'Please pass username and password.' });
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({ success: false, msg: 'Username already exists.' });
      }
      res.json({ success: true, msg: 'Successful created new user.' });
    });
  }
});

router.post('/signin', function(req, res) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({
        success: false,
        msg: 'Authentication failed. User not found.'
      });
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          const token = jwt.sign(user.toJSON(), config.secret, {
            expiresIn: config.tokenExpiresIn
          });

          // return the information including token as JSON
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.status(401).send({
            success: false,
            msg: 'Authentication failed. Wrong password.'
          });
        }
      });
    }
  });
});

router.post(
  '/signout',
  passport.authenticate('jwt', { session: false }),
  function(req, res) {
    // TODO: realize a server side session id inside the JWT Payload
    // Just forget the token in client side
    res.json({ success: true, msg: 'You are logged out.' });
  }
);

router.post('/book', passport.authenticate('jwt', { session: false }), function(
  req,
  res
) {
  console.log(req.body); // eslint-disable-line

  var newBook = new Book({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher
  });

  newBook.save(function(err) {
    if (err) {
      return res.json({ success: false, msg: 'Save book failed.' });
    }
    res.json({ success: true, msg: 'Successful created new book.' });
  });
});

router.get('/book', passport.authenticate('jwt', { session: false }), function(
  req,
  res,
  next
) {
  Book.find(function(err, books) {
    if (err) return next(err);
    res.json(books);
  });
});

export default router;
