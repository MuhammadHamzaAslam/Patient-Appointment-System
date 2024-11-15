import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { auth } from "../../../auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Profile() {
  const session = await auth();

  return (
    <section>
      {!session ? (
        redirect("/")
      ) : (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
          <Card className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg transform transition-all hover:shadow-2xl hover:scale-105 duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Image
                  src={session?.user?.image}
                  alt={session.user.name}
                  height={75}
                  width={75}
                  className="rounded-full border-2 border-blue-500 hover:scale-110 transform transition duration-300"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    {session.user.name}
                  </h2>
                  <p className="text-gray-500">{session.user.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="space-y-2">
                <div className="text-gray-700">
                  <span className="font-medium">Email:</span>{" "}
                  {session.user.email}
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">User ID:</span>{" "}
                  {session.user._id}
                </div>
                <div className="text-gray-500 text-sm">
                  <span>Session expires on: </span>
                  {new Date(session.expires).toLocaleString()}
                </div>
              </div>
            </CardContent>
            <div className="mt-6 flex justify-end">
              <Link href={"/doctors/apply"}>
                <Button>Apply as Doctor</Button>
              </Link>
            </div>
          </Card>
        </div>
      )}
    </section>
  );
}
