import { Module } from '@nestjs/common';

// Mongoose
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PersonalProfileModule } from './personal-profile/personal-profile.module';
import { UserSkillsModule } from './user-skills/user-skills.module';


@Module({
  imports: [
  MongooseModule.forRoot("mongodb+srv://dbGodfrey:godfrey123@cluster0.fcjwi.mongodb.net/dynamic_profile?retryWrites=true&w=majority", { autoCreate: true }),
  AuthModule,
  PersonalProfileModule,
  UserSkillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
