import HeroSection from "@/components/HeroSection";
import MedicalService from "@/components/MedicalService";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MedicalService/>
      <h1 className="text-3xl">Patient Appointment System</h1>
    </div>
  );
}
