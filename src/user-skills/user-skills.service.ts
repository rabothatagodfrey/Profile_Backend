import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSkills } from './user-skills-modal-and-schema';

@Injectable()
export class UserSkillsService {

    constructor(@InjectModel('UserSkills') private readonly __skillModel:Model<UserSkills[]>){}

    async addSkillsToDatabase(skills:any){

    }
    async getSkills(){

    }
    async updateSkills(skills:any){

    }
    async deleteSkill(id:any){
        
    }
}
