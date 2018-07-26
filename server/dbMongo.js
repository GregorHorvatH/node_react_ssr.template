import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:32784/testDB');

const db = mongoose.connection;

db.on('error', () => console.log('---FAILED to connect to mongoose')); //eslint-disable-line
db.once('open', () => console.log('+++Connected to mongoose')); //eslint-disable-line

// create a USERS schema
const usersSchema = new mongoose.Schema(
  {
    login: String,
    password: String,
    email: String
  },
  { collection: 'users' }
);

// we need to create a model using it
const usersModel = mongoose.model('users', usersSchema);

// create a TODOS schema
const todosSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    userId: Number
  },
  { collection: 'todos' }
);

// we need to create a model using it
const todosModel = mongoose.model('todos', todosSchema);

const mongoModels = {
  usersModel,
  todosModel
};

export default mongoModels;
