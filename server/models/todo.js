// Core
import mongoose from 'mongoose';

// Instrumnets
import config from '../config/database';

mongoose.connect(config.database);

const db = mongoose.connection;

console.log('-----------------------------------------------------------'); // eslint-disable-line
console.log('Mongo database:', config.database); // eslint-disable-line
db.once('open', () => console.log('+++Connected to mongoose')); // eslint-disable-line
db.on('error', () => console.log('---FAILED to connect to mongoose')); // eslint-disable-line
console.log('-----------------------------------------------------------'); // eslint-disable-line

const TodoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    userId: Number
  },
  { collection: 'todos' }
);

export default mongoose.model('Todo', TodoSchema);
