import Link from "next/link";
import { Button } from "./ui/button";
import { getRequest } from "@/actions/request";

export default async function DoctorList({ isHome }) {
  
  const data = await getRequest("accepted")
  console.log("data =>" , data);
  
  
  
  
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
      </div>
    </section>
  );
}
