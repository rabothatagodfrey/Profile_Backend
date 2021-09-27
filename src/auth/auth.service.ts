
import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
// User
import { User } from 'src/auth/model_and_schema';
// For Encryption and Security

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


import { InjectModel } from '@nestjs/mongoose';



@Injectable()
export class AuthService {

  constructor(@InjectModel('User') private readonly __userModel: Model<User>,private __jwt: JwtService){}

  async registerUserIntoDatabase(user : any ){
    if (!user.password) throw new BadRequestException('Please provide a password');
		if (!user.email) throw new BadRequestException('Please provide an email');

    const hashedPassword = await bcrypt.hash(user.password, 10);
    user = { ...user, password: hashedPassword }

    try{

      const new_user = new this.__userModel(user);
      new_user.save();
      return { message: 'Successfully Registered ' }

    }catch (error){
      if (error.code === 11000 && error.keyValue.email) throw new BadRequestException(`Email already taken, please sign in or sign up`);
      
      if (error.response.errors){

				const err = error.response.errors;
				if (err.name) throw new BadRequestException(err.name.message);
				throw new BadRequestException(err);
			}

			throw new BadRequestException(error.message);

    }
  }

  async authenticateUserWithUsersInDatabase(credentials :any){
    const user = await this.__userModel.findOne({ email: credentials.email });
    if (!user) throw new BadRequestException('Invalid credentials!');
		if (!await bcrypt.compare(credentials.password, user.password)) throw new BadRequestException('Invalid credentials!');

    try {
			const token = await this.__jwt.signAsync({ id: user.id });
      return token;
		} catch (error) {
			
		}

  }

  // Change User Password From The Database
	async changeUserPasswordFromTheDatabase(userId: string, passwords: any){
    const user = await this.__userModel.findOne({ _id: userId });

    if (!user) throw new BadRequestException('Not Allowed To Change password for someone else!');
    if (!await bcrypt.compare(passwords.old_password, user.password)) throw new BadRequestException('Incorrect Password!');
    if (await bcrypt.compare(passwords.new_password, user.password)) throw new BadRequestException('Sorry can\'t set the same password!');

    return await this.__userModel.findByIdAndUpdate(userId, { password: await bcrypt.hash(passwords.new_password, 10) });
  }
}
