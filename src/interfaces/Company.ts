import { Document, ObjectId } from "mongoose";

export interface ICompany extends Document {
    fullname: {
        type: string,
        required: string,
        lowercase: boolean,
        unique: boolean,
      },
      user: {
        type: ObjectId,
        ref: string
      }
}