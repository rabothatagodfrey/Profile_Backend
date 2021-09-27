
import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service';



@Controller('auth')
export class AuthController {
  constructor(private __auth : AuthService){}

  @Post('register')
	async registerUser(@Body() user: {  name: string,lastName: string, email: string, password: string }){
		return await this.__auth.registerUserIntoDatabase(user);
	}

  @Post('login')
	async loginUser(@Body() credentials: { email: String, password: String }){
		return await this.__auth.authenticateUserWithUsersInDatabase(credentials);
	}



}
