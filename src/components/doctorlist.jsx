import Link from "next/link";
import { Button } from "./ui/button";
import { getRequest } from "@/actions/request";

export default async function DoctorList({ isHome }) {
  const { allUser } = await getRequest("accepted")
  console.log("doctor =>" , allUser);
  
  
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

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((specialist, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="relative">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  width={300}
                  height={300}
                  className="w-full h-60 object-contain"
                />
              </div>
              <CardContent className="p-6 hover:bg-blue-100 ">
                <h3 className="text-center text-2xl font-semibold text-gray-800 mb-1">
                  {specialist.name}
                </h3>
                <p className="text-center text-lg text-gray-600 mb-4">
                  {specialist.role}
                </p>
                <div className="flex justify-center gap-4 mt-4 text-gray-500">
                  <Link href={specialist.socials.facebook} passHref>
                    <FaFacebook
                      className="hover:text-blue-600 transition"
                      size={24}
                    />
                  </Link>
                  <Link href={specialist.socials.instagram} passHref>
                    <FaInstagram
                      className="hover:text-pink-500 transition"
                      size={24}
                    />
                  </Link>
                  <Link href={specialist.socials.twitter} passHref>
                    <FaTwitter
                      className="hover:text-blue-400 transition"
                      size={24}
                    />
                  </Link>
                  <Link href={specialist.socials.pinterest} passHref>
                    <FaPinterest
                      className="hover:text-red-500 transition"
                      size={24}
                    />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
}
doctor => [
  {
    _id: '6730a99af557d324416f448b',
    user: {
      _id: '672f3ffc85bcb136371dd035',
      firstName: 'Hamza',
      lastName: 'Aslam',
      email: 'hamzaaslam19087@gmail.com',
      picture: 'https://lh3.googleusercontent.com/a/ACg8ocJXXCvPi6Khr-6IKQke2PE8o6AyHKTudIwO4B7yOHSJoPnSQ5A=s96-c',
      role: 'admin',
      __v: 0
    },
    status: 'accepted',
    bio: 'Hello i am Muhammad Hamza',
    hospital: 'Jinnah',
    fees: '2000',
    gender: 'Male',
    appointmentTime: '22:30',
    degree: 'MBBS',
    specialization: 'Child Specilaist',
    experience: '5',
    number: '03172772879',
    address: '1371/2 Azizabad',
    __v: 0
  },
  {
    _id: '673df4a98391d8834fa34e99',
    user: {
      _id: '6732fee0d8ef16826f04961c',
      firstName: 'Muhammad',
      lastName: 'Ahmed',
      email: 'prince1ahmed111@gmail.com',
      picture: 'https://lh3.googleusercontent.com/a/ACg8ocLWCRSgc4MSKnosnqg9tGAzUlKTNWA0o_HSh7f-aIgI5NpOpEg=s96-c',
      role: 'user',
      __v: 0
    },
    status: 'accepted',
    bio: 'Hello I am Muhammad Hamza',
    hospital: 'Tahir Medical',
    fees: '1500',
    gender: 'Male',
    appointmentTime: '14:00',
    degree: 'MBBS',
    specialization: 'Child Specialist',
    experience: '4',
    number: '03362905320',
    address: '1371/2 Azizabad',
    __v: 0
  }
]