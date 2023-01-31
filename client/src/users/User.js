// const mongoose = require('mongoose');
// const userSchema = new mongoose.Schema({
//   name: {
//       type: String,
//       required: true
//   },
//   email: {
//       type: String,
//       required: true,
//       unique: true
//   },
//   password: {
//       type: String,
//       required: true
//   }
// });
// const User = mongoose.model('User', userSchema);
// export default User;
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});
userSchema.plugin(mongoosePaginate);
export default mongoose.model("User", userSchema);