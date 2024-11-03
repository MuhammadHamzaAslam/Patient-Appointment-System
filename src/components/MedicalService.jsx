import { Card, CardContent } from "@/components/ui/card";
import { Bone, Brain, Ear, Heart, Stethoscope } from "lucide-react";
import { FaVirus } from "react-icons/fa";

export default function MedicalService() {
  const services = [
    {
      icon: Stethoscope,
      name: "Dentistry",
      color: "text-blue-500",
    },
    {
      icon: Heart,
      name: "Cardiology",
      color: "text-blue-500",
    },
    {
      icon: Ear,
      name: "ENT Specialists",
      color: "text-blue-500",
    },
    {
      icon: Bone,
      name: "Astrology",
      color: "text-blue-500",
    },
    {
      icon: Brain,
      name: "Neuroanatomy",
      color: "text-blue-500",
    },
    {
      icon: FaVirus ,
      name: "Blood Screening",
      color: "text-blue-500",
    },
  ];

  return (
    <section className="py-12 px-4 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-blue-500 font-medium mb-4 uppercase tracking-wider">
            OUR DEPARTMENTS
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Medical Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transition-transform hover:scale-105 cursor-pointer"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="font-medium text-gray-900">{service.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
