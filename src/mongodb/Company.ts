import mongoose from "mongoose";
import { ICompany } from "../interfaces/Company";

const schema = new mongoose.Schema<ICompany>(
  {
    fullname: {
      type: String,
      required: "required",
      lowercase: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CompanySchema =
  mongoose.models.Certificate || mongoose.model("company", schema);

export default CompanySchema;
