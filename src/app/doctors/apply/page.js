import ApplyForm from "@/components/ApplyForm";

export default function DoctorApplyForm() {
  return (
    <section className="container mx-auto pt-6 px-2 my-3 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">
        Apply to Join as a Healthcare Professional
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Are you a qualified doctor looking to offer your services to patients in need?
        Fill out this form to join our healthcare network and help us make quality healthcare
        more accessible to everyone. Provide your professional details to get started with 
        setting up patient appointments seamlessly.
      </p>
      <ApplyForm />
    </section>
  );
}
