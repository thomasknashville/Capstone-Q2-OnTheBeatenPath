import mongoose from "mongoose";

let isConnected = false;

export default async function connectedToMongoose() {
  try {
    if (isConnected) {
      return;
    }
    await mongoose.connect("mongodb+srv://<USERNAME>:<PASSWORD>@cluster", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    isConnected = true;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
