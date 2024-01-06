import { Document, ObjectId } from "mongoose";

export interface IAthlete extends Document {
    fullname: {
        type: string,
        required: string,
        lowercase: boolean,
        unique: boolean,
      },
      weekWorkout: {
        type: [number],
        required: string,
      },
      lastRenewal: {
        type: Date,
      },
      teacher: {
        type: [ObjectId],
        ref: string,
        required: string,
      },
}