import mongoose from "mongoose";
import { IEquipments } from "../interfaces/Equipments";

const schema = new mongoose.Schema<IEquipments>({
  fullname: {
    type: String,
    lowercase: true,
    unique: true,
    required: "required",
  },
  amount: {
    type: Number,
    required: "required"
  },
  amountAvailabe: {
    type: Number,
    required: "required"
  }
});


const EquipmentsSchema = mongoose.models.Certificate || mongoose.model("equipments", schema)

export default EquipmentsSchema