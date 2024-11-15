const { Schema, default: mongoose } = require("mongoose");

const doctorRequestSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "accepted", "rejected"],
  },
  bio: String,
  hospital: String,
  fees: String,
  gender: String,
  appointmentTime: String,
  degree: String,
  specialization: String,
  experience: String,
  number: String,
  address: String,
});

export const RequestModal =
  mongoose.models.request || mongoose.model("request", doctorRequestSchema);