import { IUser } from "../interfaces/User";
import mongoose from "mongoose";
import validator from "validator";



const schema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: "required",
      lowercase: true,
      unique: true,
      validate: {
        validator: (typed: any) => {
          return validator.isEmail(typed);
        },
        message: "email invalid",
      },
    },
    password: {
      type: String,
      required: "required",
      selected: false,
    },
    typeOfUser:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'typeOfUser',
      required: "required"
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


const UserSchema = mongoose.models.Certificate || mongoose.model('user', schema)

export default UserSchema