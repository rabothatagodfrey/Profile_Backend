import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({

  name: { type: String, required: [ true, 'Please provide your name'] },
  lastName: { type: String, required: [ true, 'Please provide your last name'] },
  email: { type: String, required: [true, 'Please provide an email address'], unique: [true, 'Email already exists, please sign in or sign up'], match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'] },
  password: { type: String, required: [ true, 'Please provide a password'] },

})

export interface User extends mongoose.Document{

    email: string;
    lastName :string,
    name: string;
    password: string;
    id: string;
}