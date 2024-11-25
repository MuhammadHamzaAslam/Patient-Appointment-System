"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { addAppointment } from "@/actions/appointment";

export function DatePicker({ session, request }) {
  console.log("session =>", session);

  const { toast } = useToast();
  const [date, setDate] = React.useState(Date.now());
  const handleBookAppointment = async () => {
    const isDateInFuture = Date.now() < new Date(date);
    if (!isDateInFuture) {
      return toast({
        variant: "destructive",
        title: "Appointment Submission Failed",
        description: `Plz Select Future Date`,
      });
    }
    const obj = {
      user: session.user._id,
      request: request,
      date: date,
    };
    const response = await addAppointment(obj);
    toast({
      variant: "success",
      title: "Appointment Booked",
      description: "You will receive a confirmation msg soon.",
    });
  };
  return (
    <section>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <div>
        {!session ? (
          <Link href={"/login"}>
            <Button className="w-full md:w-auto my-3" size="lg">
              Login To Book an Appointment
            </Button>
          </Link>
        ) : (
          <Button
            onClick={handleBookAppointment}
            className="w-full md:w-auto my-3"
            size="lg"
          >
            Book an Appointment
          </Button>
        )}
      </div>
    </section>
  );
}
