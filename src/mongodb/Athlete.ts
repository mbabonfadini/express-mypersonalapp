import mongoose from "mongoose";
import { IAthlete } from "../interfaces/Athlete";

const schema = new mongoose.Schema<IAthlete>(
  {
    fullname: {
      type: String,
      required: "required",
      lowercase: true,
      unique: true,
    },
    weekWorkout: {
      type: [Number],
      required: "required",
    },
    lastRenewal: {
      type: Date,
    },
    teacher: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "teacher",
      required: "required",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AthleteSchema = mongoose.models.Certificate || mongoose.model("athlete", schema)

export default AthleteSchema
