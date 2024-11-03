import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { specialists } from "@/lib/specialist";
import { Button } from "./ui/button";

export default function DoctorList() {
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
          <Link href={"/doctors"}>
            <Button>See All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {specialists.map((specialist, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="relative">
                <Image
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
        </div>
      </div>
    </section>
  );
}