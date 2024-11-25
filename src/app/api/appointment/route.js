import { AppointmentModal } from "@/lib/models/appointmentModal";
import connectDB from "../../../lib/connectDB";
import { UserModal } from "@/lib/models/userModal";

export async function GET() {
  await connectDB();
  const query = {};
  const doctor = req?.nextUrl?.searchParams?.get("doctor");
  const user = req?.nextUrl?.searchParams?.get("user");
  if (doctor) query.request = doctor;
  if (user) query.user = user;
  let allAppointment = await AppointmentModal.find(query)
    .populate("user")
    .populate("request");
  return Response.json({
    appointment: allAppointment,
    msg: "All Appointment Fetched",
  });
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
