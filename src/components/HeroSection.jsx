import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowBigRightIcon } from "lucide-react";
import { auth } from "../../auth";

export default async function Component() {
  const session = await auth();
  return (
    <section className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://preview.colorlib.com/theme/medicalcenter/assets/img/hero/h1_hero.png.webp')]">
      <div className="space-y-6 container mx-auto flex flex-col ">
        <div className=" my-40 mx-2">
          <div className="inline-block">
            <span className="text-blue-500 my-3 font-medium tracking-wider">
              COMMITTED TO SUCCESS
            </span>
          </div>
          <h1 className="text-4xl my-3 md:text-6xl font-extrabold text-gray-900 leading-tight">
            WE CARE ABOUT
            <br />
            YOUR <span className="text-blue-900">HEALTH</span>
          </h1>
          <p className="text-gray-600 my-3 max-w-lg">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi uquip ex ea commodo consequat is aute irure.
          </p>
          <Link href={session ? "/appointments" : "/login"}>
            <Button className="bg-blue-500 my-3 hover:bg-blue-600 px-8">
              Appointment
              <ArrowBigRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
