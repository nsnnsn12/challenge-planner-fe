import { Expose } from "class-transformer";
import BaseModel from "../../models/BaseModel";

export class ChallengeModel extends BaseModel{
  id: string = '';
  title: string = '';
  context: string = '';
  isApproved: boolean = false;
}
