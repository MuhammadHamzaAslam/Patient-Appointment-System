import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, ClockIcon, HospitalIcon, UserIcon } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
function DoctorAppointmentCard({ appointments }) {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-6">Doctor Appointments</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {appointments?.appointments?.map((appointment) => (
          <Card
            key={appointment._id}
            className="shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <CardHeader className="bg-primary/10 p-4">
              <CardTitle className="text-lg font-semibold">
                Appointment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-6">
              {/* Doctor Info */}
              <div className="flex items-center space-x-4">
                <Avatar className="w-14 h-14">
                  <AvatarImage
                    src={appointment.user.picture}
                    alt={`${appointment.user.firstName} ${appointment.user.lastName}`}
                  />
                  <AvatarFallback>
                    {appointment.user.firstName[0]}
                    {appointment.user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Patient
                  </p>
                  <p className="font-medium">
                    {appointment.user.firstName} {appointment.user.lastName}
                  </p>
                </div>
              </div>

              {/* Patient Info */}
              <div className="flex items-center space-x-2">
                <UserIcon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Doctor</p>
                  <p className="text-sm text-muted-foreground">
                    {appointment.request.user.firstName}{" "}
                    {appointment.request.user.lastName}
                  </p>
                </div>
              </div>

              {/* Hospital Info */}
              <div className="flex items-center space-x-2">
                <HospitalIcon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Hospital</p>
                  <p className="text-sm text-muted-foreground">
                    {appointment.request.hospital}
                  </p>
                </div>
              </div>

              {/* Date Info */}
              <div className="flex items-center space-x-2">
                <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Date</p>
                  <p className="text-sm text-muted-foreground">
                    {/* {new Date(appointment.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })} */}
                    {dayjs(new Date(appointment.date)).fromNow() +
                      " " +
                      dayjs(new Date(appointment.date)).format("dddd DD MMMM")}
                  </p>
                </div>
              </div>

              {/* Time Info */}
              <div className="flex items-center space-x-2">
                <ClockIcon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Time</p>
                  <p className="text-sm text-muted-foreground">
                    {appointment.request.appointmentStartTime} -{" "}
                    {appointment.request.appointmentEndTime}
                  </p>
                </div>
              </div>
            </CardContent>

            {/* Card Footer for Status */}
            <CardFooter className="p-4 bg-muted/10 flex justify-end">
              <Badge
                variant={
                  appointment.status === "pending" ? "secondary" : "default"
                }
                className="capitalize"
              >
                {appointment.status}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DoctorAppointmentCard;
