// import { getSingleRequest } from "@/actions/request";
// import Image from "next/image";

// export default async function DoctorDetail({ params }) {
//   const singleRequest = await getSingleRequest(params.id);
//   const doctor = singleRequest.singleRequest[0];

//   if (!doctor) return <p>Loading...</p>;

//   return (
//     <div className="min-h-screen bg-gray-50 py-10">
//       <div className="container mx-auto px-4">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           {/* Doctor Header Section */}
//           <div className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white">
//             <div className="flex items-center space-x-4">
//               <Image
//                 src={doctor.user.picture}
//                 alt="Doctor's profile picture"
//                 width={120}
//                 height={120}
//                 className="rounded-full border-4 border-white"
//               />
//               <div>
//                 <h2 className="text-2xl font-semibold">
//                   {doctor.user.firstName} {doctor.user.lastName}
//                 </h2>
//                 <p className="text-md">{doctor.specialization}</p>
//                 <p className="text-sm">{doctor.degree}</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <p className="text-lg font-bold">{doctor.fees} PKR</p>
//               <p className="text-sm">{doctor.hospital}</p>
//             </div>
//           </div>

//           {/* Doctor Bio */}
//           <div className="p-6">
//             <h3 className="text-xl font-semibold text-gray-700">
//               About Dr. {doctor.user.firstName}
//             </h3>
//             <p className="mt-2 text-md text-gray-600">{doctor.bio}</p>
//           </div>

//           {/* Appointment Details */}
//           <div className="p-6 bg-gray-50">
//             <h3 className="text-xl font-semibold text-gray-700">
//               Appointment Schedule
//             </h3>
//             <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="text-lg text-gray-700">Available Days</h4>
//                 <ul className="mt-2 space-y-2">
//                   {doctor.days.map((day, index) => (
//                     <li key={index} className="text-gray-600">
//                       {day}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="text-lg text-gray-700">Appointment Hours</h4>
//                 <p className="text-gray-600">
//                   {doctor.appointmentStartTime} - {doctor.appointmentEndTime}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="p-6 bg-white">
//             <h3 className="text-xl font-semibold text-gray-700">
//               Contact Information
//             </h3>
//             <div className="mt-4 space-y-4">
//               <div className="flex items-center space-x-2">
//                 <span className="font-medium text-gray-600">Phone:</span>
//                 <span>{doctor.number}</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <span className="font-medium text-gray-600">Address:</span>
//                 <span>{doctor.address}</span>
//               </div>
//             </div>
//           </div>

//           {/* Book Appointment Button */}
//           <div className="p-6 text-center">
//             <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
//               Book an Appointment
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { getSingleRequest } from "@/actions/request";
import Image from "next/image";
import { CalendarDays, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function DoctorDetail({ params }) {
  const singleRequest = await getSingleRequest(params.id);
  const doctor = singleRequest.singleRequest[0];

  if (!doctor) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          {/* Doctor Header Section */}
          <CardHeader className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col md:flex-row items-center md:space-x-6">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                  <AvatarImage
                    src={doctor.user.picture}
                    alt={`${doctor.user.firstName} ${doctor.user.lastName}`}
                  />
                  <AvatarFallback>
                    {doctor.user.firstName[0]}
                    {doctor.user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left mt-4 md:mt-0">
                  <CardTitle className="text-3xl font-bold">
                    {doctor.user.firstName} {doctor.user.lastName}
                  </CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    {doctor.specialization}
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2">
                    {doctor.degree}
                  </Badge>
                </div>
              </div>
              <div className="text-center md:text-right mt-4 md:mt-0">
                <p className="text-2xl font-bold">{doctor.fees} PKR</p>
                <p className="text-blue-100">{doctor.hospital}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Doctor Bio */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  About Dr. {doctor.user.firstName}
                </h3>
                <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
              </div>

              {/* Appointment Details */}
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">
                    Appointment Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-700">
                        Available Days
                      </h4>
                      <p className="text-sm text-gray-600">
                        {doctor.days.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-700">Hours</h4>
                      <p className="text-sm text-gray-600">
                        {doctor.appointmentStartTime} -{" "}
                        {doctor.appointmentEndTime}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Phone className="text-blue-600" />
                  <span className="text-gray-600">{doctor.number}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-blue-600" />
                  <span className="text-gray-600">{doctor.address}</span>
                </div>
              </div>
            </div>
          </CardContent>

          {/* Book Appointment Button */}
          <CardFooter className="p-6 bg-gray-50">
            <Button className="w-full md:w-auto" size="lg">
              Book an Appointment
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
