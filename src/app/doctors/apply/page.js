import ApplyForm from "@/components/ApplyForm";
import { auth } from "../../../../auth";

export default async function DoctorApplyForm() {
  const session = await auth();

  return (
    <section className="my-5 mx-7">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">
          Apply to Join as a Healthcare Professional
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Are you a qualified doctor looking to offer your services to patients
          in need? Fill out this form to join our healthcare network and help us
          make quality healthcare more accessible to everyone. Provide your
          professional details to get started with setting up patient
          appointments seamlessly.
        </p>
      </div>
      <ApplyForm session={session} />
    </section>
  );
}
