import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSkills } from './user-skills-modal-and-schema';

@Injectable()
export class UserSkillsService {

    constructor(@InjectModel('UserSkills') private readonly __skillModel:Model<UserSkills>){}

    //add skills
    async addSkillsToDatabase(skills:any){
       
        try{
            const new_skills = new this.__skillModel(skills);
            new_skills.save();
            return "skills ready"

        } catch(error){
            throw new BadRequestException(error);
        }
         
    }
    //get all skills from the database
    async getSkills(){
      return await this.__skillModel.find().exec();   
    }
    async updateSkills(skillId:any,new_skills:any){

        const current_skills = await this.__skillModel.findOne({id : skillId}).exec();

        if (new_skills.skillName) current_skills.skillName = new_skills.skillName;
		if (new_skills.skillRate) current_skills.skillRate = new_skills.skillRate;
		if (new_skills.experience) current_skills.experience = new_skills.experience;

        try{
            const skill_model = new this.__skillModel(current_skills);
            skill_model.save();
            return "succefully Updated"
        } catch (error){
            throw new BadRequestException(error);
        }
    }
    //delete one skill from the database
    async deleteSkill(skillId:any){

        const remove_skills = await this.__skillModel.findOneAndDelete({id : skillId}).exec();
        return { message: `successfully deleted ${remove_skills.skillName}' skills` }; 
    }
}
