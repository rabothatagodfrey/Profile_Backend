import * as mongoose from 'mongoose';

export const SkillSchema = new mongoose.Schema({
    skillName : {type:String},
    skillRate : {type:String},
    experience :{type:String},
    token:{type:String},
})
export interface UserSkills extends mongoose.Document{

    token:string,
    skillName : string,
    skillRate : string,
    experience :string,
    id:string
}