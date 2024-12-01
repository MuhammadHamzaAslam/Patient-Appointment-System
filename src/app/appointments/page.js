import { getAppointment } from "@/actions/appointment";
import { auth } from "../../../auth";
import PatientAppointmentCards from "@/components/PatientAppointmentCards";
import DoctorAppointmentCard from "@/components/DoctorAppointmentCard";

export default async function YourAppointments() {
  const session = await auth();
  console.log("session =>", session);

  const response = await getAppointment(
    session?.user?.role === "doctor" ? "doctor" : "user",
    session?.user?._id
  );
  console.log("response =>", response);

  if (response?.appointments?.length === 0) {
    return <h1>No Appointments Found</h1>;
  }

  return (
    <div className="container mx-auto py-8">
      {session?.user?.role === "doctor" ? (
        <DoctorAppointmentCard appointments={response} />
      ) : (
        <PatientAppointmentCards appointments={response} />
      )}
    </div>
  );
}
