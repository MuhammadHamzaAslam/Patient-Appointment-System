import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";
import { auth, signOut } from "../../auth";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";

export default async function Navbar() {
  const session = await auth(); 
  // console.log('session =>' ,session);


  return (
    <nav className="bg-white shadow-md border-b">
      <div className="container mx-auto flex justify-between items-center py-3 ">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link href={"/"}>
            <img
              src="https://preview.colorlib.com/theme/medicalcenter/assets/img/logo/logo.png"
              alt="Logo"
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Right Section - Login Button or User Menu */}
        <div className="flex items-center space-x-6">
          {!session ? (
            <Link href={"/login"}>
              <Button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Login
              </Button>
            </Link>
          ) : (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="flex items-center space-x-2 cursor-pointer">
                  <img
                    src={session?.user?.image}
                    alt="Your Pic"
                    className="rounded-full h-9 "
                  />
                </MenubarTrigger>
                <MenubarContent className="bg-white border rounded-lg shadow-lg mt-2">
                  <Link href={"/profile"}>
                    <MenubarItem className="hover:bg-gray-100 px-4 py-2">Your Profile</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <Link href={"/appointments"}>
                    <MenubarItem className="hover:bg-gray-100 px-4 py-2">Your Appointments</MenubarItem>
                  </Link>
                  <MenubarSeparator />

                  <form
                    action={async () => {
                      "use server";
                      await signOut("google");
                    }}
                  >
                    <Button variant={"outline"}>Logout</Button>
                  </form>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>
      </div>
    </nav>
  );
}
