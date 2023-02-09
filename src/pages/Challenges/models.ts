import { Transform } from "class-transformer";
import dayjs from "dayjs";
import { ISO_DATE_FORMAT } from "../../constants/common";
import BaseModel from "../../models/BaseModel";

export class ChallengeModel extends BaseModel{
  id: string = '';
  title: string = '';
  context: string = '';
  maximumPerson: number  = 0;
  participatingUsers: Array<any> = [];
  
  @Transform(
    (val) => val.value && dayjs(new Date(Number.parseInt(val.value))).format(ISO_DATE_FORMAT),
  )
  startDate: string = '';
  @Transform(
    (val) => val.value && dayjs(new Date(Number.parseInt(val.value))).format(ISO_DATE_FORMAT),
  )
  endDate: string = '';

  authenticationType: string = '';
}
