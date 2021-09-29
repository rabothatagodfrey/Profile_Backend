import { Module } from '@nestjs/common';
import { UserSkillsService } from './user-skills.service';
import { UserSkillsController } from './user-skills.controller';

@Module({
  providers: [UserSkillsModule,],
  controllers: [UserSkillsController]
})
export class UserSkillsModule {}
