"use client";
import React, { useState } from "react";
import { Drawer } from "antd";
import { FaBars, FaTimes } from "react-icons/fa";
import "antd/dist/reset.css";
import Link from "next/link";
import { Button } from "./ui/button";
const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };
  

  return (
    <nav className="bg-white border-b mx-10">
      <div className="max-w-7xl container mx-auto ">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <h1>
                <img
                  src="https://preview.colorlib.com/theme/medicalcenter/assets/img/logo/logo.png"
                  alt="logo"
                  className="mt-3"
                />
              </h1>
            </Link>
          </div>

          {/* Right side - Menu for large screens */}
          <div className="hidden md:flex space-x-8">
            <Link href={"/"} className="nav-item text-[#8DC63F] text-lg">
              Home
            </Link>
            <Link href={"/about"} className="nav-item text-[#0D6DB7] text-lg">
              About
            </Link>
            <Link href={"/contact"} className="nav-item text-[#0D6DB7] text-lg">
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href={"/login"}>
              <Button>Login</Button>
            </Link>
          </div>

          {/* Hamburger Menu for small/medium screens */}
          <div className="md:hidden flex items-center">
            {drawerVisible ? (
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={closeDrawer}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer"
                onClick={showDrawer}
              />
            )}
          </div>
        </div>
      </div>

      {/* Drawer for mobile menu */}
      <Drawer
        title={
          <span className="text-[#0D6DB7] font-bold">
            {" "}
            Patient App
          </span>
        }
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <Link href={"/"}>
          <h1>
            <img
              src="https://preview.colorlib.com/theme/medicalcenter/assets/img/logo/logo.png"
              alt="logo"
              className="my-3 h-6"
            />
          </h1>
        </Link>
        <Link href={"/"} className="nav-item text-[#8DC63F] block mb-3">
          Home
        </Link>
        <Link href={"/about"} className="nav-item text-[#0D6DB7] block mb-3">
          About
        </Link>
        <Link href={"/contact"} className="nav-item text-[#0D6DB7] block mb-3">
          Contact Us
        </Link>
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
      </Drawer>
    </nav>
  );
};

export default Navbar;
