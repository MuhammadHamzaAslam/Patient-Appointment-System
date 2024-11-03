import Link from "next/link"
import { FaFacebook, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer
      className="relative w-full py-12 bg-cover bg-center bg-no-repeat bg-[url(https://preview.colorlib.com/theme/mediplus/images/footer-bg.jpg)]"
      style={{
        backgroundImage: 'url("https://preview.colorlib.com/theme/mediplus/images/footer-bg.jpg")',
      }}
    >

      <div className="absolute inset-0 bg-[#21202021]"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mediplus Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Mediplus</h2>
            <p className="text-black mb-4">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-2xl bg-black px-2 py-2 rounded-full">
                <FaTwitter className="text-md text-white" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-2xl bg-black px-2 py-2 rounded-full">
                <FaFacebook className="text-md text-white" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-2xl bg-black px-2 py-2 rounded-full">
                <FaInstagram className="text-md text-white" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Departments Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Departments</h2>
            <ul className="space-y-2">
              {['Neurology', 'Ophthalmology', 'Nuclear Magnetic', 'Surgical', 'Cardiology', 'Dental'].map((dept) => (
                <li key={dept}>
                  <Link href="#" className="text-black cursor-pointer hover:text-primary">
                    → {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Services Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul className="space-y-2">
              {['Emergency Services', 'Qualified Doctors', 'Outdoors Checkup', '24 Hours Services'].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-black cursor-pointer hover:text-primary">
                    → {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Have a Questions?</h2>
            <address className="text-[#000] cursor-pointer hover:text-primary">
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
              <p>
                <Link href="tel:+23923929210" className="text-black cursor-pointer hover:text-primary">
                  +2 392 3929 210
                </Link>
              </p>
              <p>
                <Link href="mailto:info@yourdomain.com" className="text-black cursor-pointer hover:text-primary">
                  info@yourdomain.com
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted text-center text-sm  flex flex-col items-center">
          <p className="flex items-center space-x-1">
            <span >Copyright ©2024 All rights reserved | This Project is made with</span>
            <FaHeart className="text-red-500" aria-label="love" />
            <span>by</span>
            <Link href="https://github.com/MuhammadHamzaAslam" className="cursor-pointer text-black font-bold">
              Muhammad Hamza
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}