const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  picture : String ,
  role: {type : String, default: "user", enum : ["doctor", "user", "admin"] },
});

export const UserModal =
  mongoose.models.User || mongoose.model("User", UserSchema);
