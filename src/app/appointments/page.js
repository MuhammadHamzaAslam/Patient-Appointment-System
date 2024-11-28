import { getAppointment } from "@/actions/appointment";
import { auth } from "../../../auth";
import AppointmentCard from "@/components/AppointmentCards";

export default async function YourAppointments() {
  const session = await auth();
  console.log("session =>", session);

  const response = await getAppointment(
    session?.user?.role === "doctor" ? "doctor" : "user" ,
    session?.user?._id
  );
  console.log("response =>", response);

  if (response?.appointments?.length === 0) {
    return <h1>No Appointments Found</h1>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Appointments</h1>
      <AppointmentCard appointments={response} />
    </div>
  );
}
