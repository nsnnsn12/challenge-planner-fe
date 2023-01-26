import { Expose } from "class-transformer";
import BaseModel from "../../models/BaseModel";

export class ChallengeModel extends BaseModel{
  title: string = '';
  context: string = '';
  isApproved: boolean = false;
}
