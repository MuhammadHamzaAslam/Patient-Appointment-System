import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaFacebook,
  FaGlobe,
  FaHeart,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div>
            <Link href={"/"}>
              <h1>
                <img
                  src="https://preview.colorlib.com/theme/medicalcenter/assets/img/logo/logo2_footer.png"
                  alt="logo"
                  className="mt-3"
                />
              </h1>
            </Link>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">ABOUT US</h3>
            <p className="text-gray-400">
              Lorem igpsum doldfor sit amet, adipiscing elit, sed do eiusmod
              tempor cergelit rgh.
            </p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, adipiscing elit.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <div>
              <span className="text-white">+564</span>{" "}
              <span className="text-blue-500">7885 3222</span>
            </div>
            <div>
              <a
                href="mailto:youremail@gmail.com"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                youremail@gmail.com
              </a>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-gray-900 border-gray-800 text-gray-300"
              />
              <Button
                variant="ghost"
                className="text-blue-500 hover:text-blue-400"
              >
                Send
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            Copyright ©2024 All rights reserved | This template is made with{" "}
            <FaHeart className="w-4 h-4 inline-block text-red-500 mx-1" /> by{" "}
            <a href="#" className="text-blue-500 hover:text-blue-400">
              Colorlib
            </a>
          </div>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
                <FaFacebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaGlobe className="w-5 h-5" />
              <span className="sr-only">Website</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
