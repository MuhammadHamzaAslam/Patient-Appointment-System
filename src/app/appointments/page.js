import { getAppointment } from "@/actions/appointment";
import { auth } from "../../../auth";
import AppointmentCard from "@/components/AppointmentCards";

export default async function YourAppointments() {
  const session = await auth();

  const response = await getAppointment("user", session?.user?._id);
  console.log("response =>", response);

  // Check if no appointments are returned
  if (response?.appointments?.length === 0) {
    return <h1>No Appointments Found</h1>;
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Your Appointments</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Call AppointmentCard inside map */}
        {response?.appointments?.map((appointment) => (
          <AppointmentCard key={appointment._id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
}
