const { Schema, default: mongoose } = require("mongoose");

const appointmentSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "accepted", "cancelled" , "visited" , "missed"],
  },
  request : {type : mongoose.Schema.Types.ObjectId , ref : "request"} , 
  date : Date
},{
    timestamps : true
});

export const AppointmentModal =
  mongoose.models.appointments || mongoose.model("appointments", appointmentSchema);
