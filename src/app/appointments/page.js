import { getAppointment } from "@/actions/appointment";
import { auth } from "../../../auth";

export default async function YourAppointments() {
  const session = await auth();

//   const response = await getAppointment("user", session?.user?._id);
//   console.log("response =>" ,response);
  
  return <h1>Your Appointments</h1>;
}
