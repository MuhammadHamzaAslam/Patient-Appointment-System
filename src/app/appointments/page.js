import { getAppointment } from "@/actions/appointment";
import { auth } from "../../../auth";
import { AppointmentCard } from "@/components/AppointmentCards";

export default async function YourAppointments() {
  const session = await auth();

  const response = await getAppointment("user", session?.user?._id);
  console.log("response =>", response);

  // Check if no appointments are returned
  if (response?.appointments?.length === 0) {
    return <h1>No Appointments Found</h1>;
  }

  const handleAccept = (id) => {
    console.log(`Accepted appointment with id: ${id}`);
  };

  const handleCancel = (id) => {
    console.log(`Cancelled appointment with id: ${id}`);
  };

  return (
    <div>
      <h1>Your Appointments</h1>
      {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {response.map((appointment) => (
          <AppointmentCard
            key={appointment._id}
            appointment={appointment}
            onAccept={handleAccept}
            onCancel={handleCancel}
          />
        ))}
      </div> */}
    </div>
  );
}
