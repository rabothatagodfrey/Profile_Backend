import { Module } from '@nestjs/common';
import { PersonalProfileService } from './personal-profile.service';
import { PersonalProfileController } from './personal-profile.controller';

@Module({
  providers: [PersonalProfileModule],
  controllers: [PersonalProfileController]
})
export class PersonalProfileModule {}
