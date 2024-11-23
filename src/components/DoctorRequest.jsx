"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Eye, CheckCircle, XCircle } from "lucide-react";
import { updateRequest } from "@/actions/request";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function AdminRequestList({ allRequests }) {
  const [openSheet, setOpenSheet] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const statuses = ["all", "pending", "accepted", "rejected"];

  const handleAccept = async (id) => {
    await updateRequest(id, "accepted");
    console.log(`Accepted request ${id}`);
  };

  const handleReject = async (id) => {
    console.log(`Rejected request ${id}`);
    await updateRequest(id, "rejected");
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (selectedCategory) {
      params.set("status", selectedCategory);
    } else {
      params.delete("status");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [selectedCategory]);

  // Filter requests based on the selected category
  const filteredRequests =
    selectedCategory === "all"
      ? allRequests
      : allRequests?.filter((request) => request.status === selectedCategory);

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Doctor Requests
      </h1>

      <div className="flex justify-center items-center space-x-4 my-5">
        {statuses.map((status) => (
          <Button
            key={status}
            variant={selectedCategory === status ? "default" : "outline"}
            className={`rounded-md text-sm px-4 py-2 capitalize transition-all ${
              selectedCategory === status
                ? "bg-blue-600 text-white"
                : "text-gray-700"
            }`}
            onClick={() => setSelectedCategory(status)}
          >
            {status}
          </Button>
        ))}
      </div>

      {/* Check if no requests are available for the selected category */}
      {filteredRequests?.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No {selectedCategory} requests available.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests?.map((request) => (
            <Card
              key={request._id}
              className="shadow-xl border rounded-lg hover:scale-105 transition transform duration-300 bg-white"
            >
              <CardContent className="p-5 flex flex-col items-center">
                <img
                  src={request?.user?.picture}
                  alt={`${request.user.firstName}'s avatar`}
                  className="w-16 h-16 rounded-full mb-3 shadow"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {request.user.firstName} {request.user.lastName || ""}
                </h2>
                <p className="text-sm text-gray-600">
                  <strong>Gender:</strong> {request.gender}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Status:</strong> {request.status}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Hospital:</strong> {request.hospital}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 bg-gray-50 rounded-b-lg">
                <Sheet
                  open={openSheet === request._id}
                  onOpenChange={(open) =>
                    setOpenSheet(open ? request._id : null)
                  }
                >
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Eye className="h-5 w-5" />
                      <span className="sr-only">View details</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Request Details</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4 space-y-4">
                      <div className="flex justify-center">
                        <img
                          src={request.user.picture}
                          alt={`${request.user.firstName}'s avatar`}
                          className="w-24 h-24 rounded-full mb-3 shadow-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Name</h3>
                        <p>
                          {request.user.firstName} {request.user.lastName || ""}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Email</h3>
                        <p>{request.user.email}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Gender</h3>
                        <p>{request.gender}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">
                          Appointment Time
                        </h3>
                        <p>{request.appointmentTime}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">
                          Hospital
                        </h3>
                        <p>{request.hospital}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">
                          Specialization
                        </h3>
                        <p>{request.specialization}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Degree</h3>
                        <p>{request.degree}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">
                          Experience
                        </h3>
                        <p>{request.experience} years</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Fees</h3>
                        <p>{request.fees} PKR</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Address</h3>
                        <p>{request.address}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Bio</h3>
                        <p>{request.bio}</p>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                <div className="flex gap-2">
                  {request.status === "pending" && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-green-500 hover:text-green-700"
                        onClick={() => handleAccept(request._id)}
                      >
                        <CheckCircle className="h-5 w-5" />
                        <span className="sr-only">Accept request</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleReject(request._id)}
                      >
                        <XCircle className="h-5 w-5" />
                        <span className="sr-only">Reject request</span>
                      </Button>
                    </>
                  )}
                  {request.status === "accepted" && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-green-500 hover:text-green-700"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span className="sr-only">Accepted request</span>
                    </Button>
                  )}
                  {request.status === "rejected" && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-700"
                    >
                      <XCircle className="h-5 w-5" />
                      <span className="sr-only">Rejected request</span>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
