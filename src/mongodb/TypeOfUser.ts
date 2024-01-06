import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "required",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TypeOfUser = mongoose.models.Certificate || mongoose.model("typeOfUser", schema);

export default TypeOfUser
