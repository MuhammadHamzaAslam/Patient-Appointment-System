import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 text-gray-600 body-font">
      <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-gray-900 leading-tight">
            We Care About
            <br className="hidden lg:inline-block" />
            Your Health
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            minus, maxime sit aut beatae quam vitae? A, cum corrupti. Ab maxime
            delectus facere exercitationem quae provident in necessitatibus
            illum. Culpa?
          </p>
          <div className="flex justify-center">
            <Button className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-200">
              Appointment <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-xl shadow-lg"
            alt="hero"
            src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww"
          />
        </div>
      </div>
    </section>
  );
}
