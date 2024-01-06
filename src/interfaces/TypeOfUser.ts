import { Document } from "mongoose";

export interface ITypeOfUser extends Document {
  name: {
    type: string;
    required: string;
  };
}
