import { Document, ObjectId} from "mongoose";

export interface IEquipments extends Document {
    fullname: {
        type: string,
        lowercase: boolean,
        unique: boolean,
        required: string,
      },
      amount: {
        type: number,
        required: string
      },
      amountAvailabe: {
        type: number,
        required: string
      }
}