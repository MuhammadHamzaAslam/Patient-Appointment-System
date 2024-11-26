"use client";

import { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

export function AppointmentCard({ appointment, onAccept, onCancel }) {
  const [status, setStatus] = useState(appointment.status);

  const handleAccept = () => {
    onAccept(appointment._id);
    setStatus("accepted");
  };

  const handleCancel = () => {
    onCancel(appointment._id);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <Image
            src={appointment.user.picture}
            alt={`${appointment.user.firstName} ${appointment.user.lastName}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold">{`Dr. ${appointment.user.firstName} ${appointment.user.lastName}`}</h2>
          <p className="text-muted-foreground">
            {appointment.request.specialization}
          </p>
          <Badge
            variant={status === "accepted" ? "default" : "secondary"}
            className="mt-2"
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="text-muted-foreground" size={18} />
          <span>{appointment.request.hospital}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="text-muted-foreground" size={18} />
          <span>{`${appointment.request.appointmentStartTime} - ${appointment.request.appointmentEndTime}`}</span>
        </div>
        <div className="font-semibold">
          {format(new Date(appointment.date), "EEEE, MMMM d, yyyy")}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="destructive"
          onClick={handleCancel}
          disabled={status === "accepted"}
        >
          Cancel
        </Button>
        <Button
          variant="default"
          onClick={handleAccept}
          disabled={status === "accepted"}
        >
          Accept
        </Button>
      </CardFooter>
    </Card>
  );
}
