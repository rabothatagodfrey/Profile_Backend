
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
		const token = await this.__jwt.signAsync({ id: user.id });

    try{

      const new_user = new this.__userModel(user);
      new_user.save();
      return { message: 'Successfully Registered ' }

    }catch (error){

    }


  }

  authenticateUserWithUsersInDatabase(credentials :any){
    return "login works";
  }
}
