import { classToPlain, plainToClass } from 'class-transformer';

class BaseModel {
    static toClass(data: BaseModel, options = {}){
        try{
            return plainToClass(this, data);
        }catch (error){
            // TODO: Handle error
            console.error(error);
        }
    }

    static toPlain(data: BaseModel, options={}){
        try{
            return plainToClass(this, data);
        }catch(error){
            // TODO: Handle error
            console.error(error);
        }
    }
}

export default BaseModel;