import mongoose from "mongoose";

export const connectDB= ()=>{
    mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "LearnAPI",
  })
  .then((c) => console.log(`DB connected ! with host ${c.connection.host}` ))
  .catch((e) => console.log(e));

}