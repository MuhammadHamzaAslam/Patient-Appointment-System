import DoctorList from "@/components/doctorlist";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MedicalService from "@/components/MedicalService";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MedicalService/>
      <DoctorList/>
      <Footer/>
    </div>
  );
}
