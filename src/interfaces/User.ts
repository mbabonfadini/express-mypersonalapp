import { Document, ObjectId } from "mongoose";

export interface IUser extends Document {
  email: {
    type: string;
    required: string;
    lowercase: boolean;
    unique: boolean;
    validate: any;
  };
  password: {
    type: string;
    required: string;
    selected: boolean;
  };
  typeOfUser: {
    type: ObjectId;
    ref: string;
    required: string;
  };
}
