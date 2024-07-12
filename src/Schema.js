import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  avatar: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  phone: {
    type: Number
  },
  about: {
    type: String
  },
  age: {
    type: Number
  },
  color: {
    type: String
  }
});

const data = mongoose.model('crud-app-users', schema);

export default data;