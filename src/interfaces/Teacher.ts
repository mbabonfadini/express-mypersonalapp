import { Document, ObjectId } from "mongoose";

export interface Iteacher extends Document {
  fullname: {
    type: string;
    required: string;
    lowercase: boolean;
    unique: boolean;
  };
  hiredDate: {
    type: Date;
    required: string;
  };
  company: {
    type: ObjectId;
    ref: string;
    required: string;
    unique: boolean;
  };
  user: {
    type: ObjectId;
    ref: "user";
    required: "required";
    unique: boolean;
  };
  typeOfTeacher: {
    type: ObjectId[];
    ref: string;
  };
}
