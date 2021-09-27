import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { personal} from './personal-modal-and-schema';

@Injectable()
export class PersonalProfileService {

    constructor(@InjectModel('Personal') private readonly __personalModal:Model<personal>){}

    async addPersonalInforToDatabae(Information:any){
        
    }
    async updateInformation(Information:any){

    }
    async getPersonalInformaton(){

    }
}
