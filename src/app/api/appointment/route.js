import { AppointmentModal } from "@/lib/models/appointmentModal";
import connectDB from "../../../lib/connectDB";
import { UserModal } from "@/lib/models/userModal";
import { RequestModal } from "@/lib/models/requestModal";

export async function GET(request) {
  await connectDB();
  const query = {};
  const doctor = request.nextUrl.searchParams.get("doctor");
  const user = request.nextUrl.searchParams.get("user");
  if (doctor) {
    const doctorRequest = await RequestModal.findOne({ user: doctor });
    query.request = doctorRequest
  }
  if (user) query.user = user;
  const appointments = await AppointmentModal.find(query)
    .populate("user")
    .populate({
      path: "request",
      populate: { path: "user" },
    });
  return Response.json(
    {
      error: false,
      msg: "Appointment Fetched Successfully",
      appointments,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request) {
  await connectDB();
  try {
    let obj = await request.json();
    let newAppointment = await new AppointmentModal({ ...obj });
    newAppointment = await newAppointment.save();
    return Response.json(
      {
        error: false,
        msg: "New Appointment Added Successfully",
        appointment: newAppointment,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
