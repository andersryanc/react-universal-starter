import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // id: { type: String, unique: true, index: true },
  username: String,
  password: String,
  name: { first: String, last: String },
  email: String,
});

const User = mongoose.model( 'User', userSchema );
export default User;
