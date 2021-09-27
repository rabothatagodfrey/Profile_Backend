import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

// Mongoose
import { MongooseModule } from '@nestjs/mongoose';

// User
import { userSchema } from 'src/auth/model_and_schema';

// JWT
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    MongooseModule.forFeature([
			{ name: "User", schema: userSchema}
		]),

		JwtModule.register({
			secret: 'secretKey',
			signOptions: { expiresIn: '60min' },
		}),
	],

  providers: [ AuthService],
  controllers: [AuthController]
})
export class AuthModule {

  
}
