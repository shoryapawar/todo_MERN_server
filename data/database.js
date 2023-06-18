import mongoose from "mongoose";

export const connectDB= ()=>{
    mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "LearnAPI",
  })
  .then(() => console.log("DB connected !"))
  .catch((e) => console.log(e));

}