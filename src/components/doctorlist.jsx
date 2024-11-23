import Link from "next/link";
import { Button } from "./ui/button";
import { getRequest } from "@/actions/request";
import { User, Building2, Calendar } from "lucide-react";
import Image from "next/image";

export default async function DoctorList({ isHome }) {
  const data = await getRequest("accepted");
  console.log("data =>", data);

  return (
    <section className="py-12 px-4 md:py-24 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-blue-500 font-semibold text-xl mb-4 uppercase tracking-wider">
            OUR DOCTORS
          </h3>
        </div>

        <div className="flex justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Specialist
          </h2>
          {isHome ? (
            <Link href={"/doctors"}>
              <Button>See All</Button>
            </Link>
          ) : null}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((doctor) => (
            <div
              key={doctor._id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow duration-200 ease-in-out hover:shadow-lg hover:scale-105"
            >
              <div className="flex justify-start ps-4 mt-2 items-center">
                <img
                  src={doctor.user.picture}
                  alt={`${doctor.user.firstName} ${doctor.user.lastName}`}
                  className="h-24 rounded-full "
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Dr. {doctor.user.firstName} {doctor.user.lastName}
                </h2>
                <div className="flex items-center text-gray-600 mb-1">
                  <User className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm">{doctor.specialization}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-1">
                  <Building2 className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm">{doctor.hospital}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm">{doctor.days.join(", ")}</span>
                </div>
                <Link href={`/doctors/${doctor._id}`}>
                  <Button className="w-full text-sm bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
