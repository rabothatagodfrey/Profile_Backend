import * as mongoose from 'mongoose';

export const PersonalSchema = new mongoose.Schema({

    email: { type: String, required: [true, 'Please provide an email address'], unique: [true, 'Email already exists, please sign in or sign up'], match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'] },
    password: { type: String, required: [ true, 'Please provide a password'] },
	name: { type: String, required: [ true, 'Please provide your name'] },
    lastName: { type: String, required: [ true, 'Please provide your last name'] },
	gender: { type: String, enum: ['male', 'female', 'other'] },
    phone: { type: String },
    created_at: { type: Date },
	updated_at: { type: Date },
    profilePicture: { type: String },
    address : {type:String},
    bio:{type:String},
    token:{type:String}


});

export interface personal extends mongoose.Document{

    address:string;
    token:string;
    created_at: string;
	updated_at: string;
	password: string;
	lastName: string;
	gender: string;
	profilePicture: string;
	email: string;
	phone: string;
	name: string;
	bio: string;
	id: string;

}