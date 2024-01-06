import mongoose from "mongoose";
import { Iteacher } from "../interfaces/Teacher";

const schema = new mongoose.Schema<Iteacher>({
  fullname: {
    type: String,
    required: "required",
    lowercase: true,
    unique: true,
  },
  hiredDate: {
    type: Date,
    required: "required",
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
    required: "required",
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: "required",
    unique: true,
  },
  typeOfTeacher: {
    type: [ mongoose.Schema.Types.ObjectId ],
    ref: "typeOfTeacher",
  },
},
{
  timestamps: true,
  versionKey: false,
});

const TeacherSchema = mongoose.models.Certificate || mongoose.model("teacher", schema)

export default TeacherSchema