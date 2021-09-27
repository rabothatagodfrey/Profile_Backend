import { Module } from '@nestjs/common';

// Mongoose
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
  MongooseModule.forRoot("mongodb+srv://dbGodfrey:godfrey123@cluster0.fcjwi.mongodb.net/dynamic_profile?retryWrites=true&w=majority", { autoCreate: true }),
  AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
