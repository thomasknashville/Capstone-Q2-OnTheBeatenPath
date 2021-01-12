import mongoose from "mongoose";

const ParkSchema = new mongoose.Schema({
  parkName: String,
  parkAddress: String,
  parkLatLong: String,
  parkImages: Array,
  parkBodyText: String,
});
export const ParkModel = mongoose.model("Park", ParkSchema);
