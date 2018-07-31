const server =
  process.env.NODE_ENV !== 'production'
    ? 'localhost:32768'
    : '172.17.0.2:27017';

module.exports = {
  secret: 'mySuperPuperSecret',
  database: `mongodb://${server}/testDB`,
  tokenExpiresIn: 1200 // 2 hour
};
